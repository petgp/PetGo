using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using PetGo.Models;


namespace PetGo.Controllers
{
    [Route ("api/pets")]
    public class PetController : Controller {
        [HttpGet ("")]
        public IEnumerable<Pet> getAllPets()
        {
            using (var db = new PetContext())
            {
                return db.Pets.ToList();
            }
        }
    }
}
