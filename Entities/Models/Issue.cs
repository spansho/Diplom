using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entities.Models
{
    public class Issue
    {
        [Column("Id")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string IssueId { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Priority { get; set; }
        public int Estimation { get; set; }
        public string Link { get; set; }
        public DateTime CreatingTime { get; set; }

        [ForeignKey(nameof(Room))]
        public string RoomId { get; set; }
        public Room Room { get; set; }

    }
}
