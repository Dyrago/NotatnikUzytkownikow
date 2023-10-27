using Application.DTO;
using Application.DTO.DTOs;
using Application.Services;
using Domain.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UsersService _usersService;

        public UsersController(UsersService usersService) {

            _usersService = usersService;
        }

        [HttpGet]
        public async Task<IEnumerable<UserDTO>> Get()
        {
            return await _usersService.Get();
        }

        [HttpGet("{id}")]
        public async Task<UserDTO> GetById(int id)
        {
            return await _usersService.GetById(id);
        }

        [HttpPost]
        public async Task<IActionResult> Create(UserDTO userDTO)
        {
            if (userDTO != null) {
                await _usersService.Create(DTOMapper.MapUserDtoToUser(userDTO));
                return Ok();
            }

            throw new ArgumentNullException();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            if (id > 0)
            {
                await _usersService.Delete(id);
                return Ok();
            }

            throw new Exception(message: "Argument id must be grater then 0");
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, UserDTO userDTO)
        {
            await _usersService.Update(id, DTOMapper.MapUserDtoToUser(userDTO));
            return Ok();
        }

    }
}
