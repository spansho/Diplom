using Contracts;
using Entities;
using Entities.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace Repository
{
    public class IssueRepository : RepositoryBase<Issue>, IIssueRepository
    {
        public IssueRepository(RepositoryContext repositoryContext) : base(repositoryContext)
        {
        }
        public void CreateIssue(Issue objective)
        {
            Create(objective);
        }

        public void DeleteIssue(Issue objective)
        {
            Delete(objective);
        }

        public IEnumerable<Issue> GetAllIssues(string id)
        {
            return FindByCondition(x => x.RoomId == id, true);
        }

        public Issue GetIssueById(string id)
        {
            return FindByCondition(x => x.IssueId == id, true).FirstOrDefault();
        }

        public void UpdateIssue(Issue  objective)
        {
           Update(objective);
        }
    }
}
