import phoneNumbers from "../phone-numbers.json";
import {
  JpnPhoneNumberMeta,
  removeE164JpnPrefix,
  removeZeroPrefix,
} from "./index";
import removeInvalidPhoneNumberChars from "./removeInvalidPhoneNumberChars";

export const jpnPhoneNumberMeta: (
  input: string | number
) => JpnPhoneNumberMeta | null = (input: string | number) => {
  const inputString = String(input);
  if (
    inputString.startsWith("+81") ||
    inputString.startsWith("81") ||
    inputString.startsWith("0")
  ) {
    let result = removeInvalidPhoneNumberChars(String(input));
    result = removeE164JpnPrefix(result);
    result = removeZeroPrefix(result);

    const filteredCityPhoneNumbers = phoneNumbers
      .filter((cityPhoneNumber) => {
        return (
          result.startsWith(cityPhoneNumber.cityNumber) &&
          String(cityPhoneNumber.cityNumber) !== ""
        );
      })
      .sort((a, b) => {
        return String(b.cityNumber).length - String(a.cityNumber).length;
      });

    if (filteredCityPhoneNumbers) {
      const cityPhoneNumber = filteredCityPhoneNumbers.find(
        (cityPhoneNumber) => {
          return result.startsWith(cityPhoneNumber.cityNumber);
        }
      );

      if (cityPhoneNumber) {
        let result = removeInvalidPhoneNumberChars(String(input));
        result = removeE164JpnPrefix(result);
        result = removeZeroPrefix(result);
        const firstNumber = cityPhoneNumber.cityNumber;

        const [, afterCityNumber] = result.split(
          RegExp(`^${cityPhoneNumber.cityNumber}`)
        );

        const secondNumber = afterCityNumber.slice(
          0,
          cityPhoneNumber.nextLength.length
        );

        const restNumber = afterCityNumber.slice(
          cityPhoneNumber.nextLength.length
        );

        return {
          ID: cityPhoneNumber.ID,
          place: cityPhoneNumber.place.split("、"),
          cityNumber: cityPhoneNumber.cityNumber,
          nextLength: cityPhoneNumber.nextLength,
          parse: ["+81", firstNumber, secondNumber, restNumber],
        };
      }
    }
  }
  return null;
};

export default jpnPhoneNumberMeta;
