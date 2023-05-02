using Entities.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Contracts
{
    public interface IUserRepository
    {
        void CreateUser(User user);

        User GetUser(string userMail, bool trackChanges);


        User GetUserById(Guid userId, bool trackChanges);

        void DeleteUser(User user);

        void UpdateUser(User user);


    }
}
