using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
//Annotations for key
using Microsoft.EntityFrameworkCore;

namespace PetGo.Models
{
    public class PetContext : DbContext {
        public DbSet<Pet> Pets { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)   {
            optionsBuilder.UseSqlite("Data source=db.db");
        }
    }

    public class Pet    {
        [Key]
        public int id { get; set; }
        public int ower_id { get; set; }
        public string name { get; set; }
        public string type { get; set; }
        public string img_url { get; set; }
        public string breed { get; set; }
        public int age { get; set; }
        public int ownership_length { get; set; }
    }
}
