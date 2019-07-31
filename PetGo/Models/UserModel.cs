using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
//Annotations for key
using Microsoft.EntityFrameworkCore;

namespace PetGo.Models  {
    public class UserContext : DbContext    {
        public DbSet<User> Users { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)   {
            optionsBuilder.UseSqlite("Data Source=db.db");
        }
    }
    public class User {
        [Key]
        public int uId { get; set; }
        public string name { get; set; }
        public string email { get; set; }
        public string password { get; set; }

    }
}
