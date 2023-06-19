using AutoMapper;
using Contracts;
using Entities;
using Entities.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using ServerSite.DTO;
using System;
using System.Collections.Generic;
using System.Net;
using System.Threading.Tasks;

namespace ServerSite.Controllers
{
    [Route("api/Room")]
    [ApiController]
    public class RoomController : ControllerBase
    {
        private readonly IRepositoryManager _repository;
        private readonly IAuthenticationManager _authManager;
        private readonly IMapper _mapper;

        public RoomController(IRepositoryManager repository, IMapper mapper, IAuthenticationManager manager)
        {
            _repository = repository;
            _mapper = mapper;
            _authManager=manager;
        }


        [HttpPost("create")]
        public async Task<IActionResult> CreateRoom()
        {
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

        
        [HttpPost("get"),Authorize]
        public async Task<IActionResult> GetIssues([FromBody]UserDto user)
        {
            var userz = _repository.User.GetUser(user.Mail,true);
            var userVotedIssues= _repository.authorizedUserIssue.GetAllUserIssue(userz.Id.ToString());
            List<IssueWithEstimation> issues = new List<IssueWithEstimation>();
            foreach(var votedIssue in userVotedIssues)
            {
                IssueWithEstimation issueWithEstimation = (IssueWithEstimation)_repository.Issue.GetIssueById(votedIssue.IssueId);
                issueWithEstimation.Estimation=votedIssue.Estimation;
                issues.Add(issueWithEstimation);
            }

            return Ok(issues);
        }

    }
}
