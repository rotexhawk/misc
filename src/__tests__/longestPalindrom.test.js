import { longestPalindrome } from "../strings/longestPalindrom";

describe("Test Longest Palindrom", () => {
  it("should be able to find a simple Palindrome", () => {
    expect(longestPalindrome("bababbdbababad")).toEqual("ababa");
  });
});
