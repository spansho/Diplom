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

            RoomUser roomUser = new RoomUser { Id = Context.ConnectionId, Name = name,isObserver = false, RoomId = groupName };
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

        public async Task Voting(string estimate,string taskId, string userId, string groupName)
        {

            var task = _repository.Task.GetObjectiveById(taskId);
            task.Estimation +=int.Parse(estimate);
            _repository.Save();
            await Clients.Group(groupName).SendAsync("ChangingEstimate", _repository.RoomUser.GetAllRoomUsers(false,groupName));
        }

        public async Task StartNewVoting(string groupName)
        {
            var allUsers = _repository.RoomUser.GetAllRoomUsers(true, groupName);
            //TODO Переделка голосования
            //foreach(var user in allUsers)
            //{
            //    user.Estimate = string.Empty;
            //}
            await Clients.Group(groupName).SendAsync("StartNewVoting", allUsers);
            _repository.Save();
        }

        public async Task RevealCards(string groupName)
        {
            await Clients.Group(groupName).SendAsync("RevealCards");
        }

        public async Task AddNewTask(string id,string RoomId )
        {
            Objective task = new Objective { Description = id,RoomId=RoomId,Link=string.Empty,ObjectiveId=string.Empty,Estimation=0,CreatingTime=DateTime.Now};
            _repository.Task.CreateObjective(task);
        }

        public async Task SendTaskForVoting(string groupName,string RoomId)
        {
            //TODO CHANJE nameMhod
            var tasksCollection=_repository.Task.GetAllObjective(RoomId);

            //TODO Эта дура будет минимальное возвроащать каждый раз.Может добавить флаг или что то в этом духе.
            await Clients.Group(groupName).SendAsync("nameMethod??", tasksCollection.Where(task => task.Estimation != 0).Min(x => x.RoomId));
        }


    }
}
