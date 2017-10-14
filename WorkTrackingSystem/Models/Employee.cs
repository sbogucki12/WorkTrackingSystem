using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WTSBackend.Models
{
    public class Employee
    {
        public int ID { get; set; }
        public string Name { get; set; }   
        public Branch Branch { get; set; }
        public int BranchID { get; set; }
    }
}
