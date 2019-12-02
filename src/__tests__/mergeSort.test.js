import { mergeSort } from "../sort/mergeSort";

describe("merge sort should sort list by asc", () => {
  const arr = [3, 1, 8, 5, 9, 4, 2];
  it("should sort a simple list", () => {
    expect(mergeSort(arr)).toEqual([1, 2, 3, 4, 5, 8, 9]);
  });
});
