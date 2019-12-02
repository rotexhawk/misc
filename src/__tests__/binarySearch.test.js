import { binarySearch } from "../search/binarySearch";

describe("Test Binary Search", () => {
  it("should be able to find elm in a sorted list", () => {
    expect(binarySearch(6, [1, 2, 3, 4, 5, 6, 7])).toBe(5);
  });
});
