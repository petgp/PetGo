using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
//added for allowanonymous
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Identity;
using PetGo.SQLite;

namespace PetGo.Controllers {
    [Route ("api/users")]
    public class Users : Controller {


        //[HttpGet ("")]
        //public IEnumerable<User> GetUsers () {
        //    using (var db = new UserContext ()) {
        //        return db.Users.ToList ();
        //    }
        //}
    }
}
