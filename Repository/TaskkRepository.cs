using Contracts;
using Entities;
using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Repository
{
    public class TaskkRepository : RepositoryBase<Taskk>, ITaskRepository
    {
        public TaskkRepository(RepositoryContext repositoryContext) : base(repositoryContext)
        {
        }
        public void Createtask(Taskk task)
        {
            Create(task);
        }

        public void DeleteDtask(Taskk task)
        {
            Delete(task);
        }

        public IEnumerable<Taskk> GetAllTasks(string id)
        {
            return FindByCondition(x => x.IdRoom == id, true);
        }

        public Taskk GetTaskById(string id)
        {
            return FindByCondition(x => x.IdRoom == id,true).FirstOrDefault();
        }

        public void UpdateTask(Taskk task)
        {
           Update(task);
        }
    }
}
