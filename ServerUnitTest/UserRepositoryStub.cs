using Contracts;
using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ServerUnitTest
{
    public class UserRepositoryStub : UniversalBase<User>, IUserRepository
    {
        public void CreateUser(User user)
        {
            Create(user);
        }

        public void DeleteUser(User user)
        {
            Delete(user);
        }

        public User GetUser(string userMail, bool trackChanges)
        {
           return FindByCondition(e => e.Mail.Equals(userMail),false).SingleOrDefault();
        }

        public User GetUserById(Guid userId, bool trackChanges)
        {
            return FindByCondition(e => e.Id.Equals(userId), false).SingleOrDefault();
        }

        public void UpdateUser(User user)
        {
            throw new NotImplementedException();
        }
    }
}
