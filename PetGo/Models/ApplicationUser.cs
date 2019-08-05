using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
//Annotations for key
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity;
using System.Linq;
using System;
using PetGo.Models;
using System.Text;

namespace PetGo.SQLite {
    public class ApplicationUser : IdentityUser
    {
        //fields to add, custom
        public string FullName { get; set; }

    }

  //  public DbSet<User> Users { get; set; }
  //  protected override void OnConfiguring (DbContextOptionsBuilder optionsBuilder) {
  //    optionsBuilder.UseSqlite ("Data Source=db.db");



}
