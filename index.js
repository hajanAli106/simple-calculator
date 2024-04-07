#! /usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "enter first number", type: "number", name: "firstnNumber" },
    { message: "enter second number", type: "number", name: "secondNumber" },
    {
        message: "select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
//conditional statement
if (answer.operator === "addition") {
    console.log(answer.firstnNumber + answer.secondNumber);
}
else if (answer.operator === "subtraction") {
    console.log(answer.firstnNumber - answer.secondNumber);
}
else if (answer.operator === "multiplication") {
    console.log(answer.firstnNumber * answer.secondNumber);
}
else if (answer.operator === "division") {
    console.log(answer.firstnNumber / answer.secondNumber);
}
else {
    console.log("invalid operator");
}
