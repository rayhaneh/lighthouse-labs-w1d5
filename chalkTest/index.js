var chalk = require("chalk");

var message = "Hello " + chalk.gray("World") + chalk.white("!!");
message = chalk.bgCyan(message)
console.log(message);