var assert = require("chai").assert
var luhn = require("../index")

describe("Luhn Algorithm", function() {
  it("luhn(378282246310005) should return true", function() {
    var number = "378282246310005";
    var result = luhn(number);
    assert.isTrue(result);
  });
  it("luhn(6331101999990016) should return true", function () {
    var number = "6331101999990016"
    var results = luhn(number)
    assert.isTrue(results)
  })
  it("luhn(63311019999903) should return false", function () {
    var number = "3040"
    var results = luhn(number)
    assert.isFalse(results)
  })
});


