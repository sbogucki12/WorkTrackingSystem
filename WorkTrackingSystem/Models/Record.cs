using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WTSBackend.Models
{
    public class Record
    {
        public int ID { get; set; }
        public string Deadline { get; set; }
        public string Branch { get; set; }
        public string Subject { get; set; }
        public string Comments { get; set; }
        public string Applicant { get; set; }
        public string WTSNumber { get; set; }
        public int Counter { get; set; }
        public string CorrespondenceType { get; set; }
        public string AssignedTo { get; set; }
    }
}
