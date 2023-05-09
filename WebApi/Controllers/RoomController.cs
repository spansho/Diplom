using AutoMapper;
using Contracts;
using Entities.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ServerSite.DTO;
using System;
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
                NumberOfVisitorsIn = 1,
                RoomId = Guid.NewGuid(),
                LinkToRoom = roomLink
            };

            _repository.Room.CreateRoom(room);
            _repository.Save();

            //return Redirect();

            return Ok(new {Link= roomLink ,Id=guid});
        }

       

    }
}
