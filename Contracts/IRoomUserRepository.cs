using Entities.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Contracts
{
    public interface IRoomUserRepository
    {
        void CreateRoomUser(RoomUser roomUser);

        void DeleteRoomUser(string id);

        RoomUser GetRoomUserById(string id);

        IEnumerable<RoomUser> GetAllRoomUsers(bool trackChanges,string roomId) ;
    }
}
