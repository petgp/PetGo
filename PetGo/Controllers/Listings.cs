using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using PetGo.SQLite;

namespace Controllers.Listings {
    [Route ("api/listings")]
    public class Listings : Controller {

        [HttpGet]
        public IEnumerable<Listing> GetListings () {
            try {
                using (var db = new ListingContext ()) {
                    return db.Listings.ToList ();
                }
            } catch (Exception ex) {
                Console.WriteLine ("An error occured: " + ex.Message);
                return;
            }
        }

        [HttpPost]
        public Listing PostListing ([FromBody] string payload) {
            try {
                Listing listing = JsonConvert.DeserializeObject<Listing> (payload);
                //Need to add pet user_id to current pet object from before sending to database
                using (var db = new ListingContext ()) {
                    db.Listings.Add (listing);
                    db.SaveChanges ();
                }
            } catch (Exception ex) {
                Console.WriteLine ("An error occured: " + ex.Message);
                return;
            }
        }

        [HttpDelete]
        public Listing DeleteListing ([FromBody] string payload) {
            try {
                Listing listing = JsonConvert.DeserializeObject<Listing> (payload);
                using (var db = new ListingContext ()) {
                    db.Remove (db.Listing.Single (a => a.id == listing.id));
                }
            } catch (Exception ex) {
                Console.WriteLine ("An error occured: " + ex.Message);
                return;
            }
        }
    }
}
