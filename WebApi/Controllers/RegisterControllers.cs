using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Contracts;
using System.Threading.Tasks;
using Entities.Models;
using System;
using Entities;

namespace ServerSite.Controllers
{
    [Route("api/register")]
    [ApiController]
    public class RegisterControllers : ControllerBase
    {
        private readonly IRepositoryManager _repository;
        private readonly IAuthenticationManager _authManager;
        private readonly IMapper _mapper;

        public RegisterControllers(IRepositoryManager repository, IMapper mapper, IAuthenticationManager manager)
        {
            _repository = repository;
            _mapper = mapper;
            _authManager= manager;
        }

        [HttpPost("register")]
        public async Task<IActionResult> CreateUser([FromBody] UserDto orderDto)
        {
            if (_repository.User.GetUser(orderDto.Mail,true)== null)
            {
                User user = new User
                {
                    Id = Guid.NewGuid(),
                    Username = orderDto.Username,
                    Mail = orderDto.Mail,
                };

                _repository.User.CreateUser(user);
                _repository.Save();
            }

            return Ok();

        }

        [HttpGet("entrance")]
        public async Task<IActionResult> EntranceUser([FromBody] UserDto userDto)
        {
            var user = _repository.User.GetUser(userDto.Mail, true);
            if (user != null)
            {
                if( user.Password==userDto.password)
                {
                    var userz = _repository.User.GetUser(userDto.Mail, true);
                    var token = await _authManager.CreateToken(userz.Id);

                    return Ok(token);
                }
               
            }
            return BadRequest();
            
        }
    }
}
