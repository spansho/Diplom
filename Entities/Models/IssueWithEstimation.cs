using System;
using System.Collections.Generic;
using System.Text;

namespace Entities.Models
{
    public class IssueWithEstimation:Issue
    {
        public int Estimation { get; set; }
    }
}
