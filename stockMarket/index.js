function maxProfit(stockPrices) {

  maximumProfit = 0

  for (var i = 0; i < stockPrices.length; i++) {

    minVal = stockPrices[i]
    maxVal = Math.max.apply(null,stockPrices.slice(i+1))

    if (maxVal - minVal > maximumProfit) {
      maximumProfit = maxVal - minVal
    }
  }

  if (maximumProfit === 0) maximumProfit = -1;
  return maximumProfit;
}

module.exports  = maxProfit;