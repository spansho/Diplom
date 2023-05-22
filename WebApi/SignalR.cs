using Contracts;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System.Threading.Tasks;

namespace ServerSite
{
    public class VotingHub : Hub
    {
        private readonly IRepositoryManager _repository;
        public VotingHub(IRepositoryManager repository) { _repository = repository; }

        public async Task<object> Conect(string message, string groupName)
        {
            if (_repository.Room.GetRoomByLink(groupName) != null)
            {
                await Groups.AddToGroupAsync(Context.ConnectionId, groupName);
                await Clients.Caller.SendAsync("Receive", message);
                await Clients.Others.SendAsync("Receive", message);
                return new {UserId=Context.ConnectionId,};
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
            }
            await Clients.Others.SendAsync(message);
        }

        public async Task Voting(string message, string groupName)
        {
            //
            await Clients.Group(groupName).SendAsync("Recieve",message);
        }


    }
}
