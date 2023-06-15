using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entities.Models
{
    public class AuthorizedUserIssue
    {
        [Column("Id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string AuthorizedUserIssueId { get; set; }
        public int Estimation { get; set; } 
        [ForeignKey(nameof(Issue))]
        public string IssueId { get; set; }
        public Issue Issue { get; set; }

        [ForeignKey(nameof(User))]
        public Guid UserId { get; set; }
        public User User { get; set; }
    }
}
