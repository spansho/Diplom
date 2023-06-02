using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entities.Models
{
    public class Taskk
    {
        [Column("TaskId")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string TaskId { get; set; }

        public string Description { get; set; }

        public int Estimation { get; set; }

        public string Link { get; set; }

        public DateTime CreatingTime { get; set; }

        public string IdRoom { get; set; }

        public Room Room { get; set; }

    }
}
