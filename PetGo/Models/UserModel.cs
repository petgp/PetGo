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
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public int Zip { get; set; }
        public string Country { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }

    }
}
