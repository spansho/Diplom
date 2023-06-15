using Contracts;
using Entities;
using Entities.Models;
using System;
using System.Collections.Generic;

namespace Repository
{
    public class AuthorizedUserIssuesRepository : RepositoryBase<AuthorizedUserIssue>, IAuthorizedUserIssue
    {
        public AuthorizedUserIssuesRepository(RepositoryContext repositoryContext) : base(repositoryContext)
        {
        }

        public void CreateAuthorizedUserIsse(AuthorizedUserIssue issue)
        {
            Create(issue);
        }

        public IEnumerable<AuthorizedUserIssue> GetAllUserIssue(string id)
        {
            return FindByCondition(x => x.UserId == Guid.Parse(id), true);
        }
    }
}
