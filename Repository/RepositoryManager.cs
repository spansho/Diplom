using Contracts;
using Entities;
using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository
{
    public class RepositoryManager : IRepositoryManager
    {
        private RepositoryContext _repositoryContext;
        private IUserRepository _userRepository;
        private IRoomRepository _roomRepository;
        private IRoomUserRepository _roomUserRepository;
        public RepositoryManager(RepositoryContext repositoryContext)
        {
            _repositoryContext = repositoryContext;
        }

        public IUserRepository User
        {
            get
            {
                if (_userRepository == null)
                    _userRepository = new UserRepository(_repositoryContext);
               
                return _userRepository;
            }
        }

        public IRoomRepository Room
        {
            get
            {
                if (_roomRepository == null)
                    _roomRepository = new RoomRepository(_repositoryContext);
               
                return _roomRepository;
            }
        }

        public IRoomUserRepository RoomUser
        {
            get
            {
                if (_roomRepository == null)
                    _roomRepository = new RoomUserRepository(_repositoryContext);

                return _roomUserRepository;
            }
        }

        public void Save() => _repositoryContext.SaveChanges();
    }
}
