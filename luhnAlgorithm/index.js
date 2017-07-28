function luhn (num) {
  num = num.split("")
  for (var i = num.length -2 ; i >= 0; i -= 2){
    newVal = num[i] * 2
    num[i] = ( newVal < 10 ? newVal : newVal - 9)
  }
  sum = num.reduce(function(sum,value){
    return Number(sum) + Number(value)
  })
  return sum % 10 === 0;
}

console.log(luhn ("5105105105105100"))


module.exports = luhn;