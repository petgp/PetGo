using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PetGo.SQLite;

namespace Controllers.Pets {
    [Route ("api/pets")]
    public class Pets : Controller {

        [HttpGet]
        public IEnumerable<Pet> GetPets () {
            try {
                using (var db = new PetContext ()) {
                    return db.Pets.ToList ();
                }
            } catch (Exception ex) {
                Console.WriteLine ("An error occured: " + ex.Message);
                return;
            }
        }

        [HttpPost]
        public Pet PostPet ([FromBody] string payload) {
            try {
                Pet pet = JsonConvert.DeserializeObject<Pet> (payload);
                //Need to add pet owner id to current pet object from before sending to database
                using (var db = new PetContext ()) {
                    db.Pets.Add (pet);
                    db.SaveChanges ();
                }
            } catch (Exception ex) {
                Console.WriteLine ("An error occured: " + ex.Message);
            }
        }

        [HttpDelete]
        public Pet DeletePet ([FromBody] string payload) {
            try {
                Pet pet = JsonConvert.DeserializeObject<Pet> (payload);
                using (var db = new PetContext ()) {
                    db.Remove (db.Pet.Single (a => a.id == pet.id));
                }
            } catch (Exception ex) {
                Console.WriteLine ("An error occured: " + ex.Message);

            }
        }
    }
}
