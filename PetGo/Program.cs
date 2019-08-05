using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using PetGo.Models;

namespace PetGo.SQLite {
    public class Program {
        public static void Main (string[] args) {
            //using (var db = new UserContext ()) {
            //    db.Users.Add (new User {
            //        name = "Bryan Stevens",
            //            email = "bryan_stevens314@yahoo.com",
            //            password = "00000"
            //    });
            //    var count = db.SaveChanges ();
            //    Console.WriteLine ("{0} records saved to database", count);

            //    Console.WriteLine ();
            //    Console.WriteLine ("All users in database:");
            //    foreach (var user in db.Users) {
            //        Console.WriteLine (" - {0}", user.name);
            //    }

            //}
            CreateWebHostBuilder (args).Build ().Run ();
        }

        public static IWebHostBuilder CreateWebHostBuilder (string[] args) =>
            WebHost.CreateDefaultBuilder (args)
            .UseStartup<Startup> ();
    }
}
