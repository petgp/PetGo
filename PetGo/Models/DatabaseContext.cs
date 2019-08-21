using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
//Annotations for key
using Microsoft.EntityFrameworkCore;
using MySql.Data.MySqlClient;
namespace PetGo.Models {
  public class DatabaseContext : DbContext {
    public DatabaseContext()
        {
            
        }

        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    //optionsBuilder.UseSqlite("Data source=db.db");
        //    optionsBuilder.UseMySql("Data source=us-cdbr-iron-east-02.cleardb.net;database=heroku_4814ee10c387aab;user id=b2f72e34023ddb;Password=3ccdc0b2;");
        //}
        public DatabaseContext (DbContextOptions<DatabaseContext> options) : base (options) {

    }
    public DbSet<Breed> Breeds { get; set; }
    public DbSet<Pet> Pets { get; set; }
    public DbSet<Listing> Listings { get; set; }
    public DbSet<Message> Messages { get; set; }

  }
}
