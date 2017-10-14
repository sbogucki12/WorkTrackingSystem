using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WTSBackend.Models;

namespace WTSBackend.Persistence
{
    public class WTSContext : DbContext
    {
        public WTSContext(DbContextOptions<WTSContext> options)
            : base(options)
        {
        }

        public DbSet<Employee> Employees { get; set; }
        public DbSet<Branch> Branches { get; set; }
        public DbSet<Record> Records { get; set; }
        public DbSet<CorrespondenceType> CorrespondenceTypes { get; set; }
        
    }
}