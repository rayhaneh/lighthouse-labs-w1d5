var myModule = require("./my-module");

var birthYear = process.argv[2]

if (birthYear) {
  console.log (`You are ${myModule.age(birthYear)} years old`)
} else {
  console.log ('Give me the year you were born!')
}