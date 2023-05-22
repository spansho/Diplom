using Contracts;
using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServerUnitTest
{
    public class RoomRepositoryStub : UniversalBase<Room>, IRoomRepository
    {
        public void CreateRoom(Room room)
        {
            Create(room);
        }

        public void DeleteRoom(string id)
        {
            Delete(GetRoomById(id));
        }

        public Room GetRoomById(string id)
        {
            return FindByCondition(e => e.RoomId.ToString().Equals(id), false).SingleOrDefault();
        }

        public Room GetRoomByLink(string LinkRoom)
        {
            return FindByCondition(e => e.LinkToRoom.Equals(LinkRoom), false).SingleOrDefault();
        }

        public void UpdateRoom(string id)
        {
            throw new NotImplementedException();
        }
    }
}
