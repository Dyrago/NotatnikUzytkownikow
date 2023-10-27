using Application.DTO.DTOs;
using FluentValidation;

namespace Application.Validation
{
    public class UserDTOValidator : AbstractValidator<UserDTO>
    {
        public UserDTOValidator()
        {
            RuleFor(u => u.Name).MaximumLength(50);
            RuleFor(u => u.LastName).MaximumLength(150);
            RuleFor(u => u.DateOfBirth).NotEmpty();
            RuleFor(u => u.Gender).NotEmpty();
            RuleFor(u => u.PhoneNumber).Length(9);
        }
    }
}
