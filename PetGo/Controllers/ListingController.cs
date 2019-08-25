using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PetGo.Models;

namespace PetGo.Controllers {
    [Route ("api/listings")]
    public class ListingController : Controller {

      
            [HttpGet]
            public IEnumerable<Listing> GetListings()
            {
                Debug.WriteLine("~~~~~~~/n~~~~~/n");
                try
                {
                    using (var db = new DatabaseContext())
                    {
                        Response.StatusCode = 200;
                        return db.Listings.ToList();
                    }
                }
                catch
                {
                    Response.StatusCode = 422;
                    return Enumerable.Empty<Listing>();
                }
            }

            [HttpPost]
            public IActionResult PostListing([FromBody] Listing payload)
            {
                try
                {
                   
                    //Need to add pet owner id to current pet object from before sending to database
                    using (var db = new DatabaseContext())
                    {
                        db.Listings.Add(payload);
                        db.SaveChanges();
                        return Ok(payload);
                    }
                }
                catch (Exception ex)
                {
                    return StatusCode(422, ex.Message);
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
