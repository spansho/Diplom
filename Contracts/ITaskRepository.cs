using Entities.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Contracts
{
    public interface ITaskRepository
    {
        void Createtask(Taskk task);

        void DeleteDtask(Taskk task);

        Taskk GetTaskById(string id);

        void UpdateTask(Taskk task);

        IEnumerable<Taskk> GetAllTasks(string id);
    }
}
