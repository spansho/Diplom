using Contracts;
using Entities.Models;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace Repository
{
    public class AuthenticationManager : IAuthenticationManager
    {
       private IRepositoryManager _repositoryManager;
        private readonly IConfiguration _configuration;

        public AuthenticationManager(IRepositoryManager _repositoryManager2, IConfiguration configuration)
        {
            _repositoryManager = _repositoryManager2;
            _configuration = configuration;
        }

        public async Task<string> CreateToken(Guid id)
        {
            var signingCredentials = GetSigningCredentials();
            var claims = await GetClaims(id);
            var tokenOptions = GenerateTokenOptions(signingCredentials, claims);
           
            return new JwtSecurityTokenHandler().WriteToken(tokenOptions);
        }

        private SigningCredentials GetSigningCredentials()
        {
            var key = "mysupersecret_secretkey!123";
            var secret = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
           
            return new SigningCredentials(secret, SecurityAlgorithms.HmacSha256);
        }

        private async Task<List<Claim>> GetClaims(Guid _id)
        {
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, Convert.ToString(_id))
            };
               
                 claims.Add(new Claim(ClaimTypes.Role, "user"));
                 
            return claims;
        }

        private JwtSecurityToken GenerateTokenOptions(SigningCredentials signingCredentials, List<Claim> claims)
        {
            var jwtSettings = _configuration.GetSection("JwtSettings");
            var tokenOptions = new JwtSecurityToken(
                issuer: jwtSettings.GetSection("validIssuer").Value,
                audience: jwtSettings.GetSection("validAudience").Value,
                claims: claims,
                expires:
                DateTime.Now.AddMinutes(Convert.ToDouble(jwtSettings.GetSection("expires").Value)),signingCredentials: signingCredentials);
           
            return tokenOptions;
        }
    }
}
