using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DataAccess.Models
{
    public class ToDoEvents
    {
        public int Id { get; set; }
        public string? TaskName { get; set; }
        public string? TaskDescription { get; set; }

        public bool IsCompleted { get; set; }
    }
}
