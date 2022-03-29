const ch1 = require("./ch1.js")


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