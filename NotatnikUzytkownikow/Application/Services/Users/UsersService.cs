using Application.DTO;
using Application.DTO.DTOs;
using Application.Helpers.ConvertData;
using Domain.Entities;
using Domain.Interfaces;

namespace Application.Services
{
    public class UsersService
    {
        private readonly ICRUDRepository<User> _repository;

        public UsersService(ICRUDRepository<User> repository)
        {
            _repository = repository;
        }

        public async Task<IEnumerable<UserDTO>> Get()
        {
            var users = await _repository.Get();
            
            var dtoUsers = DTOMapper.MapUserToUserDTOIterator(users);

            return dtoUsers;
        }

        public async Task<UserDTO> GetById(int id)
        {
            var user = await _repository.GetById(id);
            return DTOMapper.MapUserToUserDTO(user);
        }

        public async Task Delete(int id)
        {
            await _repository.Delete(id);
        }

        public async Task Update(int id, User user)
        {
            await _repository.Update(id, user);
        }

        public async Task Create(User user)
        {
            await _repository.Create(user);
        }
    }
}
