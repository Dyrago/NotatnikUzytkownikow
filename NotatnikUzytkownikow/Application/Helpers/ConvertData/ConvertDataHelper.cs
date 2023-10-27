using Domain.Enums;

namespace Application.Helpers.ConvertData
{
    public static class ConvertDataHelper
    {
        public static string GetGenderString(int gender)
        {
            return Enum.GetName(typeof(Gender), gender).ToString();
        }

        public static string ConvertAndFormatDate(DateTime date)
        {
            return date.ToString("yyyy-MM-dd");
        }
    }
}
