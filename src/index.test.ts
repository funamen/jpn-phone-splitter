import { jpnPhoneNumberMeta, jpnPhoneNumberSplitter } from "./index";

describe("jpn-phone-splitter test", () => {
  it("should phone number +81-6-6208-8181", () => {
    const input = "0662088181";
    const result = jpnPhoneNumberSplitter(input);
    expect(result).toBe("+81-6-6208-8181");
  });

  it("should meta data osaka city number is 6", () => {
    const input = "0662088181";
    const result = jpnPhoneNumberMeta(input);
    expect(result?.cityNumber).toBe("6");
  });
});
