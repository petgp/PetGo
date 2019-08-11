using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
//Annotations for key
using Microsoft.EntityFrameworkCore;
using MySql.Data.MySqlClient;
namespace PetGo.Models {
  public class DatabaseContext : DbContext {
    public DatabaseContext (DbContextOptions<DatabaseContext> options) : base (options) {

    }
    public DbSet<Breed> Breeds { get; set; }
    public DbSet<Pet> Pets { get; set; }
    public DbSet<Listing> Listings { get; set; }
    public DbSet<Message> Messages { get; set; }

  }
}
