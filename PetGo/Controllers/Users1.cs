using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
//added for allowanonymous
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using PetGo.SQLite;

namespace PetGo.Controllers {
    [Route ("api/[controller]")]
    public class UsersProfileController : Controller {
        //UserManager comes from Identity, injected with ApplicationUser
        private UserManager<ApplicationUser> _userManager;
        //new _userManager
        public UsersProfileController (UserManager<ApplicationUser> userManager) {
            //constructor variable
            _userManager = userManager;
        }

        [HttpGet]
        [Authorize]
        //Get : /api/UserProfile
        //returns Object
        public async Task<Object> GetUserProfile () {
            string userId = User.Claims.First (c => c.Type == "UserId").Value;
            var user = await _userManager.FindByIdAsync (userId);
            //what fields to return from each user
            return new {
                user.FullName,
                    user.Email,
                    user.UserName
            };

        }
    }
}
