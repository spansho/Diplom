using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities.Models
{
    public class Room
    {
        [Column("RoomId")]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public string RoomId { get; set; }

        public int NumberOfVisitorsIn { get; set; }

        public string LinkToRoom { get; set; }
    }
}