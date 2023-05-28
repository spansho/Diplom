using Contracts;
using Entities;
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
        private Dictionary<string,List<RoomAngular>> roomVisitors;
        public VotingHub(IRepositoryManager repository) 
        { 
            _repository = repository; 
            roomVisitors = new Dictionary<string, List<RoomAngular>>();
        }

        public async Task<object> Conect(string message, string groupName)
        {
            if (_repository.Room.GetRoomById(groupName) != null)
            {
                if(roomVisitors.ContainsKey(groupName))
                {
                    roomVisitors[groupName].Add(new RoomAngular { UserId = Context.ConnectionId, Grade = string.Empty, isObserver = false });
                }
                else
                {
                    roomVisitors.Add(groupName, new List<RoomAngular>());
                    roomVisitors[groupName].Add(new RoomAngular { UserId = Context.ConnectionId, Grade = string.Empty, isObserver = false });
                }
                await Groups.AddToGroupAsync(Context.ConnectionId, groupName);
                await Clients.Caller.SendAsync("Receive", message);
                await Clients.Group(groupName).SendAsync("Receive", message);
                return new { UserId = Context.ConnectionId,Grade=string.Empty, isObserver = false, Visitors = roomVisitors[groupName]};
            }
            //IOD И СCONECTION ID
            return new {Message="Такой комнаты не существует"};
        }

        public async Task Disconeconect(string message, string groupName)
        {

            await Groups.RemoveFromGroupAsync(Context.ConnectionId, groupName);
            var room =_repository.Room.GetRoomByLink(message);
            room.NumberOfVisitorsIn--;
            if(room.NumberOfVisitorsIn == 0)
            {
                _repository.Room.DeleteRoom(room.RoomId.ToString());
                roomVisitors.Remove(groupName);
            }
            roomVisitors[groupName].Remove(roomVisitors[groupName].FirstOrDefault(x=>x.UserId==Context.ConnectionId.ToString()));
            //TODO ТУТ ВОЗВРАТ ПОД ВОПРОСОМ
            await Clients.Others.SendAsync(message);
        }

        public async Task<List<RoomAngular>> Voting(GradeFromUser message, string groupName)
        {
            //
            await Clients.Group(groupName).SendAsync("Recieve",message);
            return roomVisitors[groupName];    
        }


    }
}
