import chalk from 'chalk';

console.log(chalk.blue("Hello Professor!"));
console.log(chalk.red.bold("This is my Chalk homework."));
console.log(chalk.yellow("Git + NPM + Chalk working correctly!"));
console.log(chalk.green.italic("Thank you for the lesson!"));
confirm("Do you like the colors?") ? console.log(chalk.cyan("Great!")) : console.log(chalk.magenta("Oh no!"));