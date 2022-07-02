export const removeInvalidPhoneNumberChars = (input: string) => {
  return input.replace(/[^+0-9]/g, "");
};

export default removeInvalidPhoneNumberChars;
