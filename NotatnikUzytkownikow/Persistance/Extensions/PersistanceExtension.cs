using Domain.Entities;
using Domain.Interfaces;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Persistance.Data;
using Persistance.Repository;

namespace Persistance.Extensions
{
    public static class PersistanceExtension
    {
        public static void AddPersistanceExtension(this IServiceCollection services, IConfiguration configuration)
        {
            services.AddDbContext<AppDbContext>(opt => opt.UseSqlite(
                configuration.GetConnectionString("UsersDB")));

            services.AddScoped<ICRUDRepository<User>, UserRepository>();
        }
    }
}
