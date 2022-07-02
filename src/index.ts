import jpnPhoneNumberMeta from "./jpnPhoneNumberMeta";
import jpnPhoneNumberSplitter from "./jpnPhoneNumberSplitter";
import removeE164JpnPrefix from "./removeE164JpnPrefix";
import RemoveInvalidPhoneNumberChars from "./removeInvalidPhoneNumberChars";
import removeZeroPrefix from "./removeZeroPrefix";

export interface JpnPhoneNumberMeta {
  cityNumber: string;
  nextLength: string;
  ID: string;
  place: string[];
  parse: string[];
}

export default jpnPhoneNumberSplitter;
export {
  jpnPhoneNumberMeta,
  jpnPhoneNumberSplitter,
  removeE164JpnPrefix,
  RemoveInvalidPhoneNumberChars,
  removeZeroPrefix,
};
