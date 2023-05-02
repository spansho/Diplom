using Entities.Models;

namespace Contracts
{
    public interface IRoomRepository
    {
        void CreateRoom(Room room);

        void DeleteRoom(string id);

        void UpdateRoom(string id);

        Room GetRoomByLink(string LinkRoom);

        Room GetRoomById(string id);

    }
}
