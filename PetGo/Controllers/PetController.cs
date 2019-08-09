using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PetGo.Models;

namespace PetGo.Controllers {
    [Route ("api/pets")]
    public class PetController : Controller {
        // [HttpGet]
        // public IEnumerable<Pet> GetPets () {
        //     try {
        //         using (var db = new PetContext ()) {
        //             Response.StatusCode = 200;
        //             return db.Pets.ToList ();
        //         }
        //     } catch {
        //         Response.StatusCode = 422;
        //         return Enumerable.Empty<Pet> ();
        //     }
        // }

        // [HttpPost]
        // public IActionResult PostPet ([FromBody] string payload) {
        //     try {
        //         Pet pet = JsonConvert.DeserializeObject<Pet> (payload);
        //         //Need to add pet owner id to current pet object from before sending to database
        //         using (var db = new PetContext ()) {
        //             db.Pets.Add (pet);
        //             db.SaveChanges ();

        //             return CreatedAtRoute ("pets", pet.Id, pet);
        //         }
        //     } catch (Exception ex) {
        //         return StatusCode (422, ex.Message);
        //     }
        // }

        // [HttpDelete]
        // public IActionResult DeletePet ([FromBody] string payload) {
        //     try {
        //         Pet pet = JsonConvert.DeserializeObject<Pet> (payload);
        //         using (var db = new PetContext ()) {
        //             db.Remove (db.Pets.Single (a => a.Id == pet.Id));
        //             return StatusCode (204, "Delete successful");
        //         }
        //     } catch (Exception ex) {
        //         return StatusCode (422, ex.Message);
        //     }
        // }
    }
}
