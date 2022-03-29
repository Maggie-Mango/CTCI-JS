const ch1 = require("./ch1.js")


describe("CH1 tests", function () {
  it("should return true for unique strings", function () {
    expect(ch1.isUnique("abcdefgh")).toBe(true)
  })
  it("should return false for non-unique strings", function () {
    expect(ch1.isUnique("this is not unique")).toBe(false)
  })
})