using Entities.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace Contracts
{
    public interface IAuthorizedUserIssue
    {
        void CreateAuthorizedUserIsse(AuthorizedUserIssue issue);

        IEnumerable<AuthorizedUserIssue> GetAllUserIssue(string mail);


    }
}
