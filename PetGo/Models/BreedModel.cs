using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
//Annotations for key
using Microsoft.EntityFrameworkCore;
namespace PetGo.Models
{   
    public class BreedContext : DbContext
    {
        public DbSet<Breed> Breeds { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite("Data Source=db.db");
        }
    }
    public class Breed
    {
        public int Id { get; set; }
        public string Title { get; set; }
        // I think this table should basically symbolize an array of breeds that a pet would contain
        // ie, for pet 1, it might have 3 breeds, and therefor this table will have 3 records 
        //  id |  Title  | petId
        //  1  | labrador| 5
        //  2  | boxer   | 5
        //  3  | pitbull | 5
        //  4  | boxer   | 1
        // this section of the table would signifiy there is a dog with petId 5 that is of 3 
        //   breeds, and a dog with petId 1 that is of 1 breed
        public int PetId { get; set; }
    }
}
