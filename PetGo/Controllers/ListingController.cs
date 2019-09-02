using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PetGo.Models;
using System.Threading.Tasks;

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

    [HttpGet("{id}")]
    public async Task<Object> GetSingleListing(int id){
      try{
        using(var db = new DatabaseContext()){
          Listing payload = await db.Listings.FindAsync(id);
          return Ok(payload);
        }
      }catch(Exception ex){
        Console.WriteLine(ex.Message);
        return UnprocessableEntity(ex.Message);
      }
    }

  [HttpPut]
  [Route("update")]

  public async Task<Object> UpdateListing([FromBody] Listing list){
    try{
      using(var db = new DatabaseContext()){
        var l = await db.Listings.FindAsync(list.Id);
        l.PetId = list.PetId;
        l.Title = list.Title;
        l.ToUserId = list.ToUserId;
        l.UserId = list.UserId;
        l.Description = list.Description;
        l.TimeoutDate = list.TimeoutDate;
        l.Date = list.Date;
        db.Update(l);
        db.SaveChanges();
        return Ok(l);
      }
    }catch(Exception ex){
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
