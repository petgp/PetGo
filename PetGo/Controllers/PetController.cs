using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PetGo.Models;

namespace PetGo.Controllers
{
  [Route("api/pets")]
  public class PetController : Controller
  {
    [HttpGet]
    public IActionResult GetPets()
    {
      try
      {
        using (var db = new DatabaseContext())
        {
          List<Pet> ret = db.Pets.ToList();
          return Ok(ret);
        }
      }
      catch (Exception ex)
      {
        Debug.WriteLine("catch: " + ex.Message);
        return UnprocessableEntity(ex.Message);
      }
    }

    [HttpPost]
    public IActionResult PostPet([FromBody] PetWithBreed payload)
    {
      try
      {
        Pet pet = new Pet(payload);
        using (var db = new DatabaseContext())
        {
          db.Pets.Add(pet);
          db.SaveChanges();
          // we need to iterate through every breed listed in the payload and add it to the breed DB
          foreach (var breed in payload.breeds.ToList())
          {
            Breed newBreed = new Breed();
            newBreed.Title = breed;
            newBreed.PetId = pet.Id;
            db.Breeds.Add(newBreed);
          }
          db.SaveChanges();

          //return CreatedAtRoute("pets", pet.Id, pet);
          //return Json(pet);
          return Ok(pet);
        }
      }
      catch (Exception ex)
      {
        Debug.WriteLine(ex.ToString());
        return UnprocessableEntity(ex.Message);
      }
    }



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
