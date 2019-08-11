using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PetGo.Models;

namespace PetGo.Controllers {
    [Route ("api/breeds")]
    public class BreedController : Controller {

        // [HttpGet]
        // public IEnumerable<Breed> GetBreeds () {
        //     try {
        //         using (var db = new BreedContext ()) {
        //             Response.StatusCode = 200;
        //             return db.Breeds.ToList ();
        //         }
        //     } catch {
        //         Response.StatusCode = 422;
        //         return Enumerable.Empty<Breed> ();
        //     }
        // }

        // [HttpPost]
        // public IActionResult PostBreed ([FromBody] string payload) {
        //     try {
        //         Breed breed = JsonConvert.DeserializeObject<Breed> (payload);
        //         //Need to add pet owner id to current pet object from before sending to database
        //         using (var db = new BreedContext ()) {
        //             db.Breeds.Add (breed);
        //             db.SaveChanges ();
        //             return CreatedAtRoute ("listing", breed.Id, breed);
        //         }
        //     } catch (Exception ex) {
        //         return StatusCode (422, ex.Message);
        //     }
        // }

        // [HttpDelete]
        // public IActionResult DeleteBreed ([FromBody] string payload) {
        //     try {
        //         Breed breed = JsonConvert.DeserializeObject<Breed> (payload);
        //         using (var db = new BreedContext ()) {
        //             db.Remove (db.Breeds.Single (a => a.Id == breed.Id));
        //             return StatusCode (204, "Delete successful");
        //         }
        //     } catch (Exception ex) {
        //         return StatusCode (422, ex.Message);
        //     }
        // }
    }
}
