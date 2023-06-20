using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Security.Claims;

namespace WebApi.Controllers
{
    [ApiController]

    public abstract class BaseController : ControllerBase
    {
        protected Guid UserId
        {
            get
            {
                var value = User.Claims
                    .FirstOrDefault(x => x.Type == ClaimsIdentity
                    .DefaultNameClaimType)?.Value;
                if (value != null)
                    return Guid.Parse(value);

                throw new Exception(" Undefined User");

            }
        }

        protected string Email
        {
            get
            {
                var value = User.Claims
                    .FirstOrDefault(x => x.Type == ClaimTypes.Email)?.Value;
                if (value != null)
                    return value;

                throw new Exception(" Undefined User");

            }
        }


    }

       
}

