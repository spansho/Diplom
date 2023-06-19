using Contracts;
using Entities;
using Entities.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Threading.Tasks;

namespace ServerSite
{
    public class VotingHub : Hub
    {
        private readonly IRepositoryManager _repository;
        public VotingHub(IRepositoryManager repository) 
        { 
            _repository = repository; 
        }

        public async Task Conect(string name, string roomId)
        {
            if (_repository.Room.GetRoomById(roomId) is null)
            {
                await Clients.Caller.SendAsync("Receive", "Такой комнаты не существует");
            }

            RoomUser roomUser = new RoomUser { Id = Context.ConnectionId, Name = name,isObserver = false, RoomId = roomId };
            var vakidze = _repository.Room.GetRoomById(roomId);
            _repository.RoomUser.CreateRoomUser(roomUser);
            _repository.Save();
            await Groups.AddToGroupAsync(Context.ConnectionId, roomId);
            await Clients.Caller.SendAsync("Receive", new { UserId = Context.ConnectionId, Estimate = string.Empty, Name = name, isObserver = false, Visitors = _repository.RoomUser.GetAllRoomUsers(false, roomId) });
            await Clients.Group(roomId).SendAsync("ChangingEstimate", _repository.RoomUser.GetAllRoomUsers(false, roomId));
            var issues = _repository.Issue.GetAllIssues(roomId);
            await Clients.Group(roomId).SendAsync("IssuesListChanged", issues);
        }

        public async Task Disconeconect(string message, string roomId)
        {
            _repository.RoomUser.DeleteRoomUser(Context.ConnectionId);
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, roomId);
            var room =_repository.Room.GetRoomById(roomId);
            room.NumberOfVisitorsIn--;
            if(room.NumberOfVisitorsIn == 0)
            {
                _repository.Room.DeleteRoom(room.RoomId.ToString());
                _repository.Save();
            }

            _repository.Save();
            await Clients.Group(roomId).SendAsync("ChangingEstimate", _repository.RoomUser.GetAllRoomUsers(false, roomId));
        }

        public async Task Voting(string estimate, string userId, string roomId, string token = "")
        {
            if(token!=string.Empty)
            {
                //хз как тут текущую задачу полоучить ну потом обсудим
                AuthorizedUserIssue issue= new AuthorizedUserIssue() {UserId=Guid.Parse(userId),IssueId="хз что сюда ебануть",Estimation=int.Parse(estimate) };
                _repository.authorizedUserIssue.CreateAuthorizedUserIsse(issue);
            }    
            var roomUser = _repository.RoomUser.GetRoomUserById(userId);
            roomUser.Estimate = estimate;
            _repository.Save();
            await Clients.Group(roomId).SendAsync("ChangingEstimate", _repository.RoomUser.GetAllRoomUsers(false, roomId));
        }

        public async Task StartNewVoting(string roomId)
        {
            var allUsers = _repository.RoomUser.GetAllRoomUsers(true, roomId);
            foreach (var user in allUsers)
            {
                user.Estimate = string.Empty;
            }
            await Clients.Group(roomId).SendAsync("StartNewVoting", allUsers);
            _repository.Save();
        }

        public async Task RevealCards(string roomId, string estimation, string issueId)
        {
            if(!string.IsNullOrEmpty(issueId))
            {
                var issue = _repository.Issue.GetIssueById(issueId);
                issue.Estimation = int.Parse(estimation);
            }

            _repository.Save();
            await Clients.Group(roomId).SendAsync("RevealCards");
        }

        public async Task CreateNewIssueAsync(string roomId, string name)
        {
            var issue = new Issue { Name = name, Description = string.Empty, Priority = "PP-2", RoomId = roomId, Link = string.Empty, IssueId = Guid.NewGuid().ToString(), Estimation = 0, CreatingTime = DateTime.Now };
            _repository.Issue.CreateIssue(issue);
            _repository.Save();

            var issues = _repository.Issue.GetAllIssues(roomId);
            await Clients.Group(roomId).SendAsync("IssuesListChanged", issues);
        }
        
        public async Task UpdateIssue(string roomId, string issueId, string name, string description, string priority, string link, string estimation)
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

        public async Task DeleteIssue(string roomId, string issueId)
        {
            var issue = _repository.Issue.GetIssueById(issueId);
            _repository.Issue.DeleteIssue(issue);
            _repository.Save();

            var issues = _repository.Issue.GetAllIssues(roomId);
            await Clients.Group(roomId).SendAsync("IssuesListChanged", issues);
        }
    }
}
