using Contracts;
using Entities;
using Entities.Models;
using System.Linq;

namespace Repository
{
    public class RoomRepository : RepositoryBase<Room>, IRoomRepository
    {
        public RoomRepository(RepositoryContext repositoryContext) : base(repositoryContext)
        {
        }

        public void CreateRoom(Room room)
        {
            Create(room);
        }

        public void DeleteRoom(string LinkRoom)
        {
            Delete(GetRoomByLink(LinkRoom));
        }

        public Room GetRoomByLink(string LinkRoom)
        {
            return FindByCondition(e => e.LinkToRoom.Equals(LinkRoom), true).SingleOrDefault();
        }

        public Room GetRoomById(string id)
        {
            return FindByCondition(e => e.RoomId.Equals(id), true).SingleOrDefault();
        }

        public void UpdateRoom(string id)
        {
            //
        }

    }
}
