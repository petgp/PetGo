using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using PetGo.SQLite;

namespace PetGo.Controllers {
    [Route ("api/users")]
    public class Users : Controller {

        [HttpGet ("")]
        public IEnumerable<User> GetUsers () {
            using (var db = new UserContext ()) {
                return db.Users.ToList ();
            }
        }
    }
}
