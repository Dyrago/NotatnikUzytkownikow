using Application.DTO.DTOs;
using Application.Helpers.ConvertData;
using Domain.Entities;
using Domain.Enums;

namespace Application.DTO
{
    public static class DTOMapper
    {
        public static User MapUserDtoToUser(UserDTO userDTO)
        {
            int gender = (int)Enum.Parse(typeof(Gender), userDTO.Gender); 

            return new User()
            {
                Name = userDTO.Name,
                LastName = userDTO.LastName,
                DateOfBirth = Convert.ToDateTime(userDTO.DateOfBirth),
                Gender = (Gender)gender,
                PhoneNumber = userDTO.PhoneNumber
            };
        }

        public static UserDTO MapUserToUserDTO(User user)
        {
            return new UserDTO()
            {
                Id = user.Id,
                Name= user.Name,
                LastName= user.LastName,
                DateOfBirth = ConvertDataHelper.ConvertAndFormatDate(user.DateOfBirth),
                Gender = ConvertDataHelper.GetGenderString((int)user.Gender),
                PhoneNumber = user.PhoneNumber
            };
        }

        public static IEnumerable<UserDTO> MapUserToUserDTOIterator(IEnumerable<User> users)
        {
            foreach (var user in users)
            {
                yield return new UserDTO()
                {
                    Id = user.Id,
                    Name = user.Name,
                    LastName = user.LastName,
                    DateOfBirth = ConvertDataHelper.ConvertAndFormatDate(user.DateOfBirth),
                    Gender = ConvertDataHelper.GetGenderString((int)user.Gender),
                    PhoneNumber = user.PhoneNumber
                };
            }
           
        }
    }
}
