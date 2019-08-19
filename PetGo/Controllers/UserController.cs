using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
//added for allowanonymous
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using PetGo.Models;

namespace PetGo.Controllers
{
  [Route("api/users")]
  public class Users : Controller
  {

    [HttpGet("")]
    public User GetUsers()
    {
      return new User();

    }
  }
}
