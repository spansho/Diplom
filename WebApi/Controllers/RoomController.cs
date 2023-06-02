using AutoMapper;
using Contracts;
using Entities.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ServerSite.DTO;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace ServerSite.Controllers
{
    [Route("api/Room")]
    [ApiController]
    public class RoomController : ControllerBase
    {
        private readonly IRepositoryManager _repository;
        //private readonly IAuthenticationManager _authManager;
        private readonly IMapper _mapper;

        public RoomController(IRepositoryManager repository, IMapper mapper)
        {
            _repository = repository;
            _mapper = mapper;
        }


        [HttpPost("create")]
        public async Task<IActionResult> CreateRoom()
        {
            //TODO тут кароче добавить проверку на залогинен пользователь или нет
            Guid guid = Guid.NewGuid();
            string roomLink = "https://uberDuupperSait/room/"+ guid;
            Room room = new Room
            {
                NumberOfVisitorsIn = 0,
                RoomId = guid.ToString(),
                LinkToRoom = roomLink
            };

            _repository.Room.CreateRoom(room);
            _repository.Save();

            //return Redirect();
            List<User> users = new List<User>();    

            return Ok(new {Link= roomLink ,Id=guid,Users=users});
        }

       

    }
}
