using Contracts;
using Entities;
using Entities.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using SignalRSwaggerGen.Attributes;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;

namespace ServerSite
{
    [SignalRHub]
    public class VotingHub : Hub
    {
        private readonly IRepositoryManager _repository;
        public VotingHub(IRepositoryManager repository)
        {
            _repository = repository;
        }

        public async Task Conect(string name, string roomId, string userId)
        {
            try
            {
                if (_repository.Room.GetRoomById(roomId) is null)
                {
                    await Clients.Caller.SendAsync("Receive", "Такой комнаты не существует");
                }

                if (userId == null || userId == string.Empty)
                {
                    userId = Guid.NewGuid().ToString();
                }

                RoomUser roomUser = new RoomUser { Id = userId, Name = name, isObserver = false, RoomId = roomId };
                var vakidze = _repository.Room.GetRoomById(roomId);
                _repository.RoomUser.CreateRoomUser(roomUser);
                _repository.Save();
                await Groups.AddToGroupAsync(Context.ConnectionId, roomId);
                await Clients.Caller.SendAsync("Receive", new { UserId = userId, Estimate = string.Empty, Name = name, isObserver = false, Visitors = _repository.RoomUser.GetAllRoomUsers(false, roomId) });
                await Clients.Group(roomId).SendAsync("ChangingEstimate", _repository.RoomUser.GetAllRoomUsers(false, roomId));
                var issues = _repository.Issue.GetAllIssues(roomId);
                await Clients.Group(roomId).SendAsync("IssuesListChanged", issues);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }

        public async Task Disconeconect(string message, string roomId, string userId)
        {
            try
            {
                _repository.RoomUser.DeleteRoomUser(userId);
                await Groups.RemoveFromGroupAsync(Context.ConnectionId, roomId);
                var room = _repository.Room.GetRoomById(roomId);
                room.NumberOfVisitorsIn--;
                if (room.NumberOfVisitorsIn == 0)
                {
                    _repository.Room.DeleteRoom(room.RoomId.ToString());
                    _repository.Save();
                }

                _repository.Save();
                await Clients.Group(roomId).SendAsync("ChangingEstimate", _repository.RoomUser.GetAllRoomUsers(false, roomId));
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }

        public async Task Voting(string estimate, string userId, string roomId, string token, string issueId)
        {
            try
            {
                if (token != string.Empty && issueId != string.Empty && userId != string.Empty)
                {
                    AuthorizedUserIssue issue = new AuthorizedUserIssue { UserId = Guid.Parse(userId), IssueId = issueId, Estimation = 10 };
                    _repository.authorizedUserIssue.CreateAuthorizedUserIsse(issue);
                }

                var roomUser = _repository.RoomUser.GetRoomUserById(userId);
                roomUser.Estimate = estimate;
                _repository.Save();
                await Clients.Group(roomId).SendAsync("ChangingEstimate", _repository.RoomUser.GetAllRoomUsers(false, roomId));
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }

        public async Task StartNewVoting(string roomId)
        {
            try
            {
                var allUsers = _repository.RoomUser.GetAllRoomUsers(true, roomId);
                foreach (var user in allUsers)
                {
                    user.Estimate = string.Empty;
                }

                await Clients.Group(roomId).SendAsync("StartNewVoting", allUsers);
                _repository.Save();
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }

        public async Task RevealCards(string roomId, string estimation, string issueId)
        {
            try
            {
                if (!string.IsNullOrEmpty(issueId))
                {
                    var issue = _repository.Issue.GetIssueById(issueId);
                    var doubleEstimation = double.Parse(estimation, CultureInfo.InvariantCulture);
                    var intEstimation = (int)doubleEstimation;
                    issue.Estimation = intEstimation;
                }

                _repository.Save();
                await Clients.Group(roomId).SendAsync("RevealCards");
                var issues = _repository.Issue.GetAllIssues(roomId);
                await Clients.Group(roomId).SendAsync("IssuesListChanged", issues);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }

        public async Task CreateNewIssueAsync(string roomId, string name)
        {
            try
            {


                var issue = new Issue { Name = name, Description = string.Empty, Priority = "PP-2", RoomId = roomId, Link = string.Empty, IssueId = Guid.NewGuid().ToString(), Estimation = 0, CreatingTime = DateTime.Now };
                _repository.Issue.CreateIssue(issue);
                _repository.Save();

                var issues = _repository.Issue.GetAllIssues(roomId);
                await Clients.Group(roomId).SendAsync("IssuesListChanged", issues);
            }
            catch(Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }
        
        public async Task UpdateIssue(string roomId, string issueId, string name, string description, string priority, string link, string estimation)
        {
            try
            {
                var issue = _repository.Issue.GetIssueById(issueId);
                issue.Description = description;
                issue.Priority = priority;
                issue.Link = link;
                issue.Name = name;
                issue.Estimation = int.Parse(estimation);
                _repository.Save();

                var issues = _repository.Issue.GetAllIssues(roomId);
                await Clients.Group(roomId).SendAsync("IssuesListChanged", issues);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }

        public async Task DeleteIssue(string roomId, string issueId)
        {
            try
            {
                var issue = _repository.Issue.GetIssueById(issueId);
                _repository.Issue.DeleteIssue(issue);
                _repository.Save();

                var issues = _repository.Issue.GetAllIssues(roomId);
                await Clients.Group(roomId).SendAsync("IssuesListChanged", issues);
            }
            catch (Exception e)
            {
                Console.WriteLine(e.Message);
            }
        }
    }
}
