using Contracts;
using Entities;
using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Repository
{
    public class ObjectiveRepository : RepositoryBase<Objective>, IObjectiveRepository
    {
        public ObjectiveRepository(RepositoryContext repositoryContext) : base(repositoryContext)
        {
        }
        public void CreateObjective(Objective objective)
        {
            Create(objective);
        }

        public void DeleteObjective(Objective objective)
        {
            Delete(objective);
        }

        public IEnumerable<Objective> GetAllObjective(string id)
        {
            return FindByCondition(x => x.RoomId == id, true);
        }

        public Objective GetObjectiveById(string id)
        {
            return FindByCondition(x => x.RoomId == id,true).FirstOrDefault();
        }

        public void UpdateObjective(Objective  objective)
        {
           Update(objective);
        }
    }
}
