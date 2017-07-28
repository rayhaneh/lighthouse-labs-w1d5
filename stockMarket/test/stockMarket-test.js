var assert = require("chai").assert
var maxProfit = require("../index")


describe("Testing the stock market assignment", function () {
  it ("maxProfit([45, 24, 35, 31, 40, 38, 11]) should return 16", function() {
    var profit = 16
    var result = maxProfit([45, 24, 35, 31, 40, 38, 11])
    console.log("result = " + result, "profit" + profit)
    assert.equal(result,profit)
  })
  it ("maxProfit([45, 40, 38, 31, 24, 15, 11]) should return -1", function() {
    var profit = -1
    var result = maxProfit([45, 40, 38, 31, 24, 15, 11])
    assert.equal(result,profit)
  })
  it ("maxProfit([35, 10, 61, 80, 100]) should return 90", function() {
    var profit = 90
    var result = maxProfit([35, 10, 61, 80, 100])
    assert.equal(result,profit)
  })
})