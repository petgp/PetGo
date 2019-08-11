using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PetGo.Models;

namespace PetGo.Controllers {
    [Route ("api/listings")]
    public class ListingController : Controller {

        // public class PetController : Controller {
        //     [HttpGet]
        //     public IEnumerable<Listing> GetListings () {
        //         try {
        //             using (var db = new ListingContext ()) {
        //                 Response.StatusCode = 200;
        //                 return db.Listings.ToList ();
        //             }
        //         } catch {
        //             Response.StatusCode = 422;
        //             return Enumerable.Empty<Listing> ();
        //         }
        //     }

        //     [HttpPost]
        //     public IActionResult PostListing ([FromBody] string payload) {
        //         try {
        //             Listing listing = JsonConvert.DeserializeObject<Listing> (payload);
        //             //Need to add pet owner id to current pet object from before sending to database
        //             using (var db = new ListingContext ()) {
        //                 db.Listings.Add (listing);
        //                 db.SaveChanges ();
        //                 return CreatedAtRoute ("listing", listing.Id, listing);
        //             }
        //         } catch (Exception ex) {
        //             return StatusCode (422, ex.Message);
        //         }
        //     }

        //     [HttpDelete]
        //     public IActionResult DeleteListing ([FromBody] string payload) {
        //         try {
        //             Listing listing = JsonConvert.DeserializeObject<Listing> (payload);
        //             using (var db = new ListingContext ()) {
        //                 db.Remove (db.Listings.Single (a => a.Id == listing.Id));
        //                 return StatusCode (204, "Delete successful");
        //             }
        //         } catch (Exception ex) {
        //             return StatusCode (422, ex.Message);
        //         }
        //     }
        // }
    }
}
