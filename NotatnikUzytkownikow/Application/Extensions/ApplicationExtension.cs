using Application.Services;
using Application.Validation;
using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.Extensions.DependencyInjection;

namespace Application.Extensions
{
    public static class ApplicationExtension
    {
        public static void AddApplicationExtension(this IServiceCollection service)
        {
            service.AddScoped<UsersService>();      
            
            service.AddValidatorsFromAssemblyContaining<UserDTOValidator>()
                .AddFluentValidationAutoValidation();
        }
    }
}
