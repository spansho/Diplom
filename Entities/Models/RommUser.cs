using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace Entities.Models
{
    public class RoomUser
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public string Estimate { get; set; }
        public bool isObserver { get; set; }

        [ForeignKey(nameof(User))]
        public string RoomId { get; set; }
        public Room Room { get; set; }

    }
}
