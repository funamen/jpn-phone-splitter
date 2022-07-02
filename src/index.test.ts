import { jpnPhoneNumberMeta, jpnPhoneNumberSplitter } from "./index";

describe("jpn-phone-splitter test", () => {
  it("should phone number +81-3-1111-1111", () => {
    const input = "+81311111111";
    const result = jpnPhoneNumberSplitter(input);
    expect(result).toBe("+81-3-1111-1111");
  });

  it("should meta data 東京都２３区", () => {
    const input = "+81311111111";
    const result = jpnPhoneNumberMeta(input);
    expect(result?.place.includes("東京都２３区")).toBeTruthy();
  });
});
