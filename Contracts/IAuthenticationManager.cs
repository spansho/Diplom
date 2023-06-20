using Entities.Models;
using System;
using System.Threading.Tasks;

namespace Contracts
{
    public interface IAuthenticationManager
    {
        Task<string> CreateToken(Guid id,string email);
    }
}