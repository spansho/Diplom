using Entities.Models;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Contracts
{
    public interface IIssueRepository
    {
        void CreateIssue(Issue objective);

        void DeleteIssue(Issue objective);

        Issue GetIssueById(string id);

        void UpdateIssue(Issue objective);

        IEnumerable<Issue> GetAllIssue(string id);
    }
}
