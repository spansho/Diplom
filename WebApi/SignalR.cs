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

        public async Task Conect(string name, string groupName)
        {
            if (_repository.Room.GetRoomById(groupName) is null)
            {
                await Clients.Caller.SendAsync("Receive", "Такой комнаты не существует");
            }

            RoomUser roomUser = new RoomUser { Id = Context.ConnectionId, Name = name, Estimate = string.Empty, isObserver = false, RoomId = groupName };
            var vakidze = _repository.Room.GetRoomById(groupName);
            vakidze.NumberOfVisitorsIn++;
            _repository.RoomUser.CreateRoomUser(roomUser);
            _repository.Save();
            await Groups.AddToGroupAsync(Context.ConnectionId, groupName);
            await Clients.Caller.SendAsync("Receive", new { UserId = Context.ConnectionId, Estimate = string.Empty, Name = name, isObserver = false, Visitors = _repository.RoomUser.GetAllRoomUsers(false, groupName) });
            await Clients.Group(groupName).SendAsync("ChangingEstimate", _repository.RoomUser.GetAllRoomUsers(false, groupName));
        }

        public async Task Disconeconect(string message, string groupName)
        {
            _repository.RoomUser.DeleteRoomUser(Context.ConnectionId);
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, groupName);
            var room =_repository.Room.GetRoomById(groupName);
            room.NumberOfVisitorsIn--;
            if(room.NumberOfVisitorsIn == 0)
            {
                _repository.Room.DeleteRoom(room.RoomId.ToString());
                _repository.Save();
            }

            _repository.Save();
            await Clients.Group(groupName).SendAsync("ChangingEstimate", _repository.RoomUser.GetAllRoomUsers(false, groupName));
        }

        public async Task Voting(string estimate, string userId, string groupName)
        {

            var roomUser = _repository.RoomUser.GetRoomUserById(userId);
            roomUser.Estimate = estimate;
            _repository.Save();
            await Clients.Group(groupName).SendAsync("ChangingEstimate", _repository.RoomUser.GetAllRoomUsers(false,groupName));
        }

        public async Task StartNewVoting(string groupName)
        {
            var allUsers = _repository.RoomUser.GetAllRoomUsers(true, groupName);
            foreach(var user in allUsers)
            {
                user.Estimate = string.Empty;
            }
            await Clients.Group(groupName).SendAsync("StartNewVoting", allUsers);
            _repository.Save();
        }

        public async Task RevealCards(string groupName)
        {
            await Clients.Group(groupName).SendAsync("RevealCards");
        }


    }
}
