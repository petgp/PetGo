using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PetGo.Models;

namespace PetGo.Controllers
{
  [Route("api/listings")]
  public class ListingController : Controller
  {


    [HttpGet]
    public IActionResult GetListings()
    {
      try
      {
        using (var db = new DatabaseContext())
        {

          var query = from l in db.Listings
                      join p in db.Pets on l.PetId equals p.Id
                      select new ListingWithPet { listing = l, pet = p };
          var result = query.ToList();
          return Ok(result);
        }
      }
      catch (Exception ex)
      {
        Console.WriteLine("Error:" + ex);
        return UnprocessableEntity(ex.Message);
      }
    }

    [HttpPost]
    public IActionResult PostListing([FromBody] Listing payload)
    {
      try
      {
        using (var db = new DatabaseContext())
        {
          db.Listings.Add(payload);
          db.SaveChanges();
          return Ok(payload);
        }
      }
      catch (Exception ex)
      {
        Console.WriteLine("Error: " + ex);
        return UnprocessableEntity(ex.Message);
      }
    }

    //[HttpDelete]
    //public IActionResult DeleteListing([FromBody] string payload)
    //{
    //    try
    //    {
    //        Listing listing = JsonConvert.DeserializeObject<Listing>(payload);
    //        using (var db = new ListingContext())
    //        {
    //            db.Remove(db.Listings.Single(a => a.Id == listing.Id));
    //            return StatusCode(204, "Delete successful");
    //        }
    //    }
    //    catch (Exception ex)
    //    {
    //        return StatusCode(422, ex.Message);
    //    }
    //}
  }

}
