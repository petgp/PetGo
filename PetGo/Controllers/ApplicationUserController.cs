using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using PetGo.Models;
using PetGo.SQLite;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.EntityFrameworkCore;

namespace PetGo.Controllers
{

  [Route("api/[controller]")]
  [ApiController]
  public class ApplicationUserController : ControllerBase
  {
    private UserManager<ApplicationUser> _userManager;
    private SignInManager<ApplicationUser> _signInManager;
    private readonly ApplicationSettings _appSettings;

    public ApplicationUserController(UserManager<ApplicationUser> userManager, SignInManager<ApplicationUser> signInManager, IOptions<ApplicationSettings> appSettings)
    {
      _appSettings = appSettings.Value; //accessing injected instances from services.AddDefaultIdentity
      _signInManager = signInManager;
      _userManager = userManager;
    }

    [HttpGet]
    public async Task<Object> GetAllUsers()
    {
      try
      {
        List<ApplicationUser> result = new List<ApplicationUser>();
        var optionsBuilder = new DbContextOptionsBuilder<AuthenticationContext>();
        optionsBuilder.UseMySql("Data source=us-cdbr-iron-east-02.cleardb.net;database=heroku_4814ee10c387aab;user id=b2f72e34023ddb;Password=3ccdc0b2;");
        using (var db = new AuthenticationContext(optionsBuilder.Options))
        {
          result = db.ApplicationUsers.ToList();
        }
        return Ok(result);
      }
      catch (Exception ex)
      {
        Console.WriteLine(ex);
        throw ex;
      }
    }
    [HttpGet("{id}")]
    public async Task<Object> GetSingleUser(string id)
    {
      try
      {
        var optionsBuilder = new DbContextOptionsBuilder<AuthenticationContext>();
        optionsBuilder.UseMySql("Data source=us-cdbr-iron-east-02.cleardb.net;database=heroku_4814ee10c387aab;user id=b2f72e34023ddb;Password=3ccdc0b2;");
        using (var db = new AuthenticationContext(optionsBuilder.Options))
        {
          return Ok(db.ApplicationUsers.Find(id));
        }

      }
      catch (Exception ex)
      {
        throw ex;
      }
    }
    [HttpPost]
    [Route("Register")]
    //POST : /api/ApplicationUser/Register

    public async Task<Object> PostApplicationUser(ApplicationUserModel model)
    {
      var applicationUser = new ApplicationUser()
      {
        UserName = model.UserName,
        Email = model.Email,
        //Password = model.Password
      };

      try
      {
        var result = await _userManager.CreateAsync(applicationUser, model.Password);
        return Ok(result);
        //string the = "the";
        //JObject json = JObject.Parse(str);
        //return res;
      }
      catch (Exception ex)
      {
        string err = ex.Message;
        throw ex;
      }
    }

    [HttpPost]
    [Route("Login")]
    //POST /ApplicationUser/Login

    public async Task<IActionResult> Login(LoginModel model)
    {
      try
      {
        var user = await _userManager.FindByEmailAsync(model.Email);
        if (user != null && await _userManager.CheckPasswordAsync(user, model.Password))
        {
          var tokenDescriptor = new SecurityTokenDescriptor
          {
            Subject = new ClaimsIdentity(new Claim[]
              {
                        new Claim("UserId", user.Id.ToString())
              }),
            Expires = DateTime.UtcNow.AddDays(1),
            SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_appSettings.JWT_Secret)), SecurityAlgorithms.HmacSha256Signature)
          };

          var tokenHandler = new JwtSecurityTokenHandler();
          var securityToken = tokenHandler.CreateToken(tokenDescriptor);
          var token = tokenHandler.WriteToken(securityToken);
          return Ok(new { token });
        }
        else
        {
          return BadRequest(new { message = "Email or password is incorrect" });
        }
      }
      catch (Exception ex)
      {
        string mes = ex.Message;
        string test = "test";
        return BadRequest(new { message = "Email or password is incorrect" });
      }
    }
  }
}
