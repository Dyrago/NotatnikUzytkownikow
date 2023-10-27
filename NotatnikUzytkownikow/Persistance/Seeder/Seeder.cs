using Domain.Entities;
using Persistance.Data;
using Domain.Enums;

namespace Persistance.Seeder
{
    public static class Seeder
    {
        public static async Task Seed(AppDbContext context)
        {
            if (context.Users.Any()) return;

            var users = new List<User>()
            {
                new User()
                {
                    Name = "John",
                    LastName = "Doe",
                    DateOfBirth = new DateTime(1990, 10, 15),
                    Gender = Gender.Male,
                    PhoneNumber = "111222333"

                },

                new User()
                {
                    Name = "Jane",
                    LastName = "Doe",
                    DateOfBirth = new DateTime(1996, 1, 21),
                    Gender = Gender.Female,
                    PhoneNumber = "222333444"
                }
            };

            context.Users.AddRange(users);
            await context.SaveChangesAsync();
        }
    }
}
