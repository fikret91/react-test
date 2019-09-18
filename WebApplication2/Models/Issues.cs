using System;
using System.Collections.Generic;

namespace WebApplication2.Models
{
    public partial class Issues
    {
        public int Id { get; set; }
        public string Message { get; set; }
        public DateTime CreatedDttm { get; set; }
        public string Author { get; set; }
    }
}
