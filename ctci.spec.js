const ch1 = require("./ch1.js")
const sorting = require("./sorting.js")

describe("CH1 tests", function () {
  it(" isUnique should return true for unique strings", function () {
    expect(ch1.isUnique("abcdefgh")).toBe(true)
  })
  it("isUnique should return false for non-unique strings", function () {
    expect(ch1.isUnique("this is not unique")).toBe(false)
  })
  it("isPermutation should return true for strings that are permutations", function () {
    expect(ch1.isPermutation("ACAB", "BACA")).toBe(true)
  })
  it("isPermutation should return false for strings that are not permutations", function () {
    expect(ch1.isPermutation("CAT", "CAA")).toBe(false)
  })
})


test("bubble sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const sortedNums = bubbleSort(nums);
  expect(sortedNums).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});