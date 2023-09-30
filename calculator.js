#! /usr/bin/env node
import inquirer from "inquirer";
import showBanner from "node-banner";
import gadient from 'gradient-string';
import { sum, sub, mul } from './services.js';
import gradient from "gradient-string";
let answers = [
    {
        name: "num1",
        type: "number",
        message: ("Enter first number for calculation"),
        validate: (input) => {
            if (isNaN(input)) {
                return "Please enter a number :";
            }
            return true;
        }
    },
    {
        name: "num2",
        type: "number",
        message: ("Enter Second number for calculation"),
        validate: (input) => {
            if (isNaN(input)) {
                return "Please enter a number";
            }
            return true;
        }
    },
    {
        name: "Operation",
        type: "list",
        choices: ["addition", "subtraction", "multiplication"],
        message: gadient.fruit("Enter your operation"),
    }
];
let answer = [{
        name: "again",
        type: "confirm",
        message: gradient.fruit("Do you want to calculate more"),
    }];
(async () => {
    await showBanner('Calculator', 'This is a Calculator', 'blue', 'red');
})();
async function calculator() {
    let condition = true;
    while (condition) {
        let { num1, num2, Operation } = await inquirer.prompt(answers);
        if (Operation === "addition") {
            console.log("The addition of your given numbers are : " + sum(num1, num2));
        }
        else if (Operation === "subtraction") {
            console.log("The subtraction of your given numbers are : " + sub(num1, num2));
        }
        else if (Operation === "multiplication") {
            console.log("The multiplication of your given numbers are : " + mul(num1, num2));
        }
        let { again } = await inquirer.prompt(answer);
        condition = again;
    }
}
setTimeout(() => {
    calculator();
}, 1000);
