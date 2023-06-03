﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Contracts
{
    public interface IRepositoryManager
    {
        IUserRepository User { get; }
        IRoomRepository Room { get; }
        IRoomUserRepository RoomUser { get; }

        IObjectiveRepository Objective { get; }
        void Save();
    }
}
