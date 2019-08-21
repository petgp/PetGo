using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
//added for allowanonymous
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using PetGo.SQLite;
using PetGo.Models;
namespace PetGo.Controllers
{
  [Route("api/[controller]")]
  public class UsersProfileController : Controller
  {
    //UserManager comes from Identity, injected with ApplicationUser
    private UserManager<ApplicationUser> _userManager;
    //new _userManager
    public UsersProfileController(UserManager<ApplicationUser> userManager)
    {
      //constructor variable
      _userManager = userManager;
    }

    [HttpGet("")]
    [Authorize]
    //Get : /api/UserProfile
    //returns Object
    public User GetUserProfile()
    {
      return new User();

    }
  }
}
