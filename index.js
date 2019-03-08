var chalk = require("chalk");

var message = chalk.bgRed.bold("Hello ") + chalk.underline.bgBlue("World");
console.log(message);