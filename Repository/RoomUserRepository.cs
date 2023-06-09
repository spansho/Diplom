﻿using Contracts;
using Entities;
using Entities.Models;
using System.Collections.Generic;
using System.Linq;

namespace Repository
{
    public class RoomUserRepository : RepositoryBase<RoomUser>, IRoomUserRepository
    {
        public RoomUserRepository(RepositoryContext repositoryContext) : base(repositoryContext)
        {
        }

        public void CreateRoomUser(RoomUser roomUser)
        {
            Create(roomUser);
        }

        public void DeleteRoomUser(string id)
        {
            Delete(GetRoomUserById(id));
        }


        public IEnumerable<RoomUser> GetAllRoomUsers(bool trackChanges, string roomId)
        {
            return FindAll(trackChanges).Where(c => c.RoomId == roomId).ToList();
        }

        public RoomUser GetRoomUserById(string id)
        {
            return FindByCondition(e => e.Id.Equals(id), true).SingleOrDefault();
        }

    }
}
