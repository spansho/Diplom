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
            _repository.RoomUser.CreateRoomUser(roomUser);
            _repository.Save();
            await Groups.AddToGroupAsync(Context.ConnectionId, groupName);
            await Clients.Group(groupName).SendAsync("Receive", new { UserId = Context.ConnectionId, Estimate = string.Empty, Name = name, isObserver = false, Visitors = _repository.RoomUser.GetAllRoomUsers(false, groupName) });
        }

        public async Task Disconeconect(string message, string groupName)
        {

            await Groups.RemoveFromGroupAsync(Context.ConnectionId, groupName);
            var room =_repository.Room.GetRoomByLink(message);
            room.NumberOfVisitorsIn--;
            if(room.NumberOfVisitorsIn == 0)
            {
                _repository.Room.DeleteRoom(room.RoomId.ToString());
                _repository.Save();
            }
            //roomVisitors[groupName].Remove(roomVisitors[groupName].FirstOrDefault(x=>x.UserId==Context.ConnectionId.ToString()));
            //TODO ТУТ ВОЗВРАТ ПОД ВОПРОСОМ
            await Clients.Others.SendAsync(message);
        }

        public async Task Voting(EstimateFromUser message, string groupName)
        {

            var roomUser = _repository.RoomUser.GetRoomUserById(message.Id);
            roomUser.Estimate = message.Estimate;
            _repository.Save();
            await Clients.Group(groupName).SendAsync("ChangingEstimate", _repository.RoomUser.GetAllRoomUsers(false,groupName));
        }


    }
}
