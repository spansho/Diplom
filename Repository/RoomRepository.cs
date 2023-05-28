using Contracts;
using Entities;
using Entities.Models;
using System.Linq;

namespace Repository
{
    public class RoomRepository : RepositoryBase<Entities.Models.Room>, IRoomRepository
    {
        public RoomRepository(RepositoryContext repositoryContext) : base(repositoryContext)
        {
        }

        public void CreateRoom(Entities.Models.Room room)
        {
            Create(room);
        }

        public void DeleteRoom(string LinkRoom)
        {
            Delete(GetRoomByLink(LinkRoom));
        }

        public Entities.Models.Room GetRoomByLink(string LinkRoom)
        {
            return FindByCondition(e => e.LinkToRoom.Equals(LinkRoom), true).SingleOrDefault();
        }

        public Entities.Models.Room GetRoomById(string id)
        {
            return FindByCondition(e => e.RoomId.Equals(id), true).SingleOrDefault();
        }

        public void UpdateRoom(string id)
        {
            //
        }

    }
}
