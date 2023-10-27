using Domain.Entities;
using Domain.Interfaces;
using Microsoft.EntityFrameworkCore;
using Persistance.Data;

namespace Persistance.Repository
{
    public class UserRepository : ICRUDRepository<User>
    {
        private readonly AppDbContext _context;

        public UserRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<User>> Get()
        {
            return await _context.Users.ToListAsync();
        }

        public async Task<User> GetById(int id)
        {
            if (id > 0)
            {
                var user = await _context.Users.FirstOrDefaultAsync(u => u.Id == id);

                if (user != null)
                {
                    return user;
                }

                throw new Exception(message: $"User by id: {id} is null");
            }

            throw new Exception(message: $"Id must be greater then 0");
        }

        public async Task Create(User user)
        {
            if (user != null) {
                _context.Users.Add(user);
                await _context.SaveChangesAsync();
                return;
            }

            throw new Exception(message: "User can't be null");
        }

        public async Task Delete(int id)
        {
            if (id > 0)
            {
                var user = await _context.Users.FirstOrDefaultAsync(x => x.Id == id);

                if (user != null)
                {
                    _context.Users.Remove(user);
                    await _context.SaveChangesAsync();
                    return;
                }

                throw new Exception(message: $"No user to delete by id: {id}");
            }
        }

        public async Task Update(int id, User user)
        {
            if (id > 0 && user != null)
            {
                user.Id = id;
                _context.Users.Update(user);
                await _context.SaveChangesAsync();
                return;
            }

            throw new Exception(message: $"Id must be greater then 0");
        }
    }
}
