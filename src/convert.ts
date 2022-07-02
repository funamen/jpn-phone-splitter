import CityPhoneNumbers from "../city-phone-numbers.json";
import MobilePhoneNumbers from "../mobile-phone-numbers.json";
import * as fs from "fs";

const phoneNumbers = [...CityPhoneNumbers, ...MobilePhoneNumbers].map(
  (value) => ({
    ID: String(value.ID),
    place: String(value.place),
    cityNumber: String(value.cityNumber),
    nextLength: String(value.nextLength),
  })
);

fs.writeFileSync("phone-numbers.json", JSON.stringify(phoneNumbers));
