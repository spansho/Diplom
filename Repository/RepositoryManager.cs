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
        private IObjectiveRepository _objectiveRepository;
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
                if (_roomUserRepository == null)
                    _roomUserRepository = new RoomUserRepository(_repositoryContext);

                return _roomUserRepository;
            }
        }

        public IObjectiveRepository Task
        {
            get
            {
                if (_objectiveRepository == null)
                    _objectiveRepository = new ObjectiveRepository(_repositoryContext);

                return _objectiveRepository;
            }
        }

        public void Save() => _repositoryContext.SaveChanges();
    }
}
