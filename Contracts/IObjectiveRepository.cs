using Entities.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Contracts
{
    public interface IObjectiveRepository
    {
        void CreateObjective(Objective objective);

        void DeleteObjective(Objective objective);

        Objective GetObjectiveById(string id);

        void UpdateObjective(Objective objective);

        IEnumerable<Objective> GetAllObjective(string id);
    }
}
