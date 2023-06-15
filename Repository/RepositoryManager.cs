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
        private IIssueRepository _issueRepository;
        private IAuthorizedUserIssue _authorizedUserIssue;
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

        public IIssueRepository Issue
        {
            get
            {
                if (_issueRepository == null)
                    _issueRepository = new IssueRepository(_repositoryContext);

                return _issueRepository;
            }
        }

        public IAuthorizedUserIssue authorizedUserIssue
        {
            get
            {
                if (_authorizedUserIssue == null)
                    _authorizedUserIssue = new AuthorizedUserIssuesRepository(_repositoryContext);

                return _authorizedUserIssue;
            }
        }

        public void Save() => _repositoryContext.SaveChanges();
    }
}
