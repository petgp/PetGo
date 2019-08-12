using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PetGo.Models;

namespace PetGo.Controllers {
    [Route ("api/pets")]
    public class PetController : Controller {
        [HttpGet]
        public IEnumerable<Pet> GetPets()
        {
            try
            {
                using (var db = new DatabaseContext())
                {
                    Response.StatusCode = 200;
                    System.Diagnostics.Debug.WriteLine("HELLLO\n\n\n");
                    //var test = from p in db.Breeds;
                    //var temp = db.Breeds.Where(b => b.PetId.Equals(52)).Select(b => new { title = b.Title }).ToList();
                    //var temp = db.Breeds.Select(b => new { Title = b.Title }).ToList();

                    //var query = from b in db.Breeds
                    //           where b.Id == 52 select b.Title;
                    //System.Diagnostics.Debug.WriteLine(test);


                    //foreach(var item in  temp)
                    //{
                    //    System.Diagnostics.Debug.WriteLine(item);
                    //}
                    //initialize new return list
                    List<PetWithBreed> ret = new List<PetWithBreed>();
                    //loop through the pets in the db
                    foreach (var pet in db.Pets.ToList())
                    {
                        //query the breed table and return a list of the breeds that correspond to the current petID
                        //var temp = db.Breeds.Where(b => b.PetId.Equals(pet.Id)).Select(b => string { title = (string)b.Title }).ToList();
                        //PetWithBreed updatedPet = (PetWithBreed)pet;

                        var query = from b in db.Breeds
                                    where b.PetId == pet.Id
                                    select b.Title;
                        //System.Diagnostics.Debug.WriteLine(pet.GetType());
                        PetWithBreed updatedPet = new PetWithBreed(pet, query.ToList());
                  
                        
                      
                        ret.Add(updatedPet);


                    }
                    //return db.Pets.ToList();
                    return ret;
                }
            }
            catch
            {
                Response.StatusCode = 422;
                return Enumerable.Empty<PetWithBreed>();
            }
        }

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
