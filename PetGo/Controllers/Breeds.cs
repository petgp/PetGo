using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PetGo.SQLite;

namespace Controllers.Breeds {
    [Route ("api/breeds")]
    public class Breeds : Controller {

        [HttpGet]
        public IEnumerable<Breed> GetListings () {
            try {
                using (var db = new BreedContext ()) {
                    return db.Breeds.ToList ();
                }
            } catch (Exception ex) {
                Console.WriteLine ("An error occured: " + ex.Message);
                return;
            }
        }

        [HttpPost]
        public Breed PostBreed ([FromBody] string payload) {
            try {
                Breed breed = JsonConvert.DeserializeObject<Breed> (payload);
                using (var db = new BreedContext ()) {
                    db.Breeds.Add (breed);
                    db.SaveChanges ();
                }
            } catch (Exception ex) {
                Console.WriteLine ("An error occured: " + ex.Message);
                return;
            }
        }

        [HttpDelete]
        public Breed DeleteBreed ([FromBody] string payload) {
            try {
                Breed breed = JsonConvert.DeserializeObject<Breed> (payload);
                using (var db = new BreedContext ()) {
                    db.Remove (db.Listing.Single (a => a.id == breed.id));
                }
            } catch (Exception ex) {
                Console.WriteLine ("An error occured: " + ex.Message);
                return;
            }
        }
    }
}
