using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
//Annotations for key
using Microsoft.EntityFrameworkCore;


namespace PetGo.Models
{
    public class ListingContext : DbContext
    {
        public DbSet<Listing> Listings { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=db.db");
        }
    }
    public class Listing
    {
        [Key]
        public int Id { get; set; }
        public string Date { get; set; }
        public string TimeoutDate { get; set; }
        public int UserId { get; set; }
        public int PetId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public int ToUserId { get; set; }

    }
}
