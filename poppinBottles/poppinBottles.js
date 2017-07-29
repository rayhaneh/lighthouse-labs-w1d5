function poppinBottles (investment) {

  var eachPrice = 2;

  var caps            = [0];
  var emptyB          = [0];
  var bottlesFromCaps = [0];
  var bottlesFromEB   = [0];
  var fullB           = [Math.floor(investment / eachPrice)];

  var i = 0;
  while ((fullB[i]) !== 0) {

    bottlesFromCaps.push(Math.floor((caps[i] + fullB[i]) / 4))
    bottlesFromEB.push(Math.floor((emptyB[i] + fullB[i]) / 2))
    caps.push((caps[i] + fullB[i]) % 4)
    emptyB.push((emptyB[i] + fullB[i]) % 2)
    fullB.push(bottlesFromCaps[i+1] + bottlesFromEB[i+1])

    i = i + 1

  }

  return {
    bottlesPurchased  : fullB[0],
    totalBottles      : sum(fullB),
    bottlesFromCaps   : sum(bottlesFromCaps),
    bottlesFromEB     : sum(bottlesFromEB),
    remainedCaps      : caps[caps.length - 1],
    remainedEB        : emptyB[emptyB.length -1]
  }

}

function sum(arr) {
  return arr.reduce(function(sum, value){
    return sum + value;
  })
}

var results = poppinBottles(process.argv[2]);
console.log("Purchased Bottles:", results.bottlesPurchased)
console.log("Total Bottles From Caps:", results.bottlesFromCaps)
console.log("Total Bottles From Empty Bottles:", results.bottlesFromEB)
console.log("Total Bottles:", results.totalBottles)
console.log("Remained Caps:", results.remainedCaps)
console.log("Remained Empty Bottles:", results.remainedEB)




