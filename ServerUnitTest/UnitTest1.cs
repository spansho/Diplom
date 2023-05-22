using Entities.Models;

namespace ServerUnitTest
{
    public class Tests
    {
        [SetUp]
        public void Setup()
        {
        }

        [Test]
        public void UserRepository_AddUser_ShouldBeAdded()
        {
            UserRepositoryStub stub= new UserRepositoryStub();
            User user = new User { Id = Guid.NewGuid(), Mail = "zxc12312", Username = "Volodya" };
            stub.CreateUser(user);

            var znachenie = stub.GetUser("zxc12312", false);

            Assert.That(znachenie,Is.Not.Null);
        }

        [Test]
        public void UserRepository_DeleteUser_ShouldBeDeleted()
        {
            UserRepositoryStub stub = new UserRepositoryStub();
            User user = new User { Id = Guid.NewGuid(), Mail = "zxc12312", Username = "Volodya" };
            stub.CreateUser(user);
            stub.DeleteUser(user);
            var znachenie = stub.GetUser("zxc12312", false);

            Assert.That(znachenie, Is.Null);
        }

        [Test]
        public void UserRepository_GetUserByMail_ShouldBeGetted()
        {
            UserRepositoryStub stub = new UserRepositoryStub();
            User user = new User { Id = Guid.NewGuid(), Mail = "zxc12312", Username = "Volodya" };
            stub.CreateUser(user);

            var znachenie = stub.GetUser("zxc12312", false);

            Assert.That(znachenie, Is.EqualTo(user));
        }

        [Test]
        public void UserRepository_GetUserById_ShouldBeGetted()
        {
            UserRepositoryStub stub = new UserRepositoryStub();
            Guid newGuid = Guid.NewGuid();
            User user = new User { Id = newGuid, Mail = "zxc12312", Username = "Volodya" };
            stub.CreateUser(user);

            var znachenie = stub.GetUserById(newGuid, false);

            Assert.That(znachenie, Is.EqualTo(user));
        }

        [Test]
        public void RoomRepository_CreateRoom_ShouldBeAdded()
        {
            RoomRepositoryStub stub = new RoomRepositoryStub();
            Guid newGuid = Guid.NewGuid();
            Room room = new Room { RoomId = newGuid, NumberOfVisitorsIn = 1, LinkToRoom = "best" + newGuid.ToString() };
            stub.CreateRoom(room);

            var znachenie = stub.GetRoomById(newGuid.ToString());

            Assert.That(znachenie, Is.Not.Null);
        }

        [Test]
        public void RoomRepository_CreateRoom_ShouldBeDeleted()
        {
            RoomRepositoryStub stub = new RoomRepositoryStub();
            Guid newGuid = Guid.NewGuid();
            Room room = new Room { RoomId = newGuid, NumberOfVisitorsIn = 1, LinkToRoom = "best" + newGuid.ToString() };
            stub.CreateRoom(room);

            var znachenie = stub.GetRoomById(newGuid.ToString());

            Assert.That(znachenie, Is.Null);
        }

        [Test]
        public void RoomRepository_GetRoomById_ShouldBeGetted()
        {
            RoomRepositoryStub stub = new RoomRepositoryStub();
            Guid newGuid = Guid.NewGuid();
            Room room = new Room { RoomId = newGuid, NumberOfVisitorsIn = 1, LinkToRoom = "best"+newGuid.ToString() };
            stub.CreateRoom(room);

            var znachenie = stub.GetRoomById(newGuid.ToString());

            Assert.That(znachenie.RoomId, Is.EqualTo(newGuid));
        }

        [Test]
        public void RoomRepository_GetRoomByLink_ShouldBeGetted()
        {
            RoomRepositoryStub stub = new RoomRepositoryStub();
            Guid newGuid = Guid.NewGuid();
            Room room = new Room { RoomId = newGuid, NumberOfVisitorsIn = 1, LinkToRoom = "best" + newGuid.ToString() };
            stub.CreateRoom(room);

            var znachenie = stub.GetRoomByLink(room.LinkToRoom);

            Assert.That(znachenie.LinkToRoom, Is.EqualTo(room.LinkToRoom));
        }
    }
}