import jpnPhoneNumberMeta from "./jpnPhoneNumberMeta";

export const jpnPhoneNumberSplitter = (
  input: string | number,
  options: { e164: boolean } = { e164: true }
) => {
  const inputString = String(input).replace(/\D/, "");
  let phoneNumberMeta = jpnPhoneNumberMeta(inputString);

  return (
    phoneNumberMeta
      ? options.e164
        ? phoneNumberMeta.parse.join("-")
        : "0" + phoneNumberMeta.parse.slice(1).join("-")
      : inputString
  ).replace(/-+$/, "");
};

export default jpnPhoneNumberSplitter;
