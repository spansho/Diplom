using Contracts;
using Entities;
using Entities.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repository
{
    public class UserRepository : RepositoryBase<User>, IUserRepository
    {
        public UserRepository(RepositoryContext repositoryContext)
        : base(repositoryContext)
        {
        }

        public  void CreateUser(User user)
        {
            Create(user);
        }

        public void DeleteUser(User user)
        {
            Delete(user);
        }

        public void UpdateUser(User user)
        {
            Update(user);
        }

        public  User GetUser(string userMail, bool trackChanges) => FindByCondition(e => e.Mail.Equals(userMail), trackChanges).SingleOrDefault();

       

        public User GetUserById(Guid userId, bool trackChanges)
        {
            return FindByCondition(e => e.Id.Equals(userId), trackChanges).SingleOrDefault();
        }


    }
}
