import inquirer from "inquirer";
let terminate = false;
while (!terminate) {
    console.log("Enter 1 for addition:");
    console.log("Enter 2 for subtraction:");
    console.log("Enter 3 for division:");
    console.log("Enter 4 for multiplication:");
    console.log("Enter 5 to terminate:");
    let choice = await inquirer.prompt([
        {
            name: "choice",
            message: "Enter your choice:",
            type: "input"
        }
    ]);
    switch (choice.choice) {
        case "1":
        case "2":
        case "3":
        case "4":
            let num = await inquirer.prompt([
                {
                    name: "num1",
                    message: "Enter first number:",
                    type: "input"
                },
                {
                    name: "num2",
                    message: "Enter second number:",
                    type: "input"
                }
            ]);
            const number1 = parseFloat(num.num1);
            const number2 = parseFloat(num.num2);
            let answer;
            switch (choice.choice) {
                case "1":
                    answer = number1 + number2;
                    console.log("Result of addition:", answer);
                    break;
                case "2":
                    answer = number1 - number2;
                    console.log("Result of subtraction:", answer);
                    break;
                case "3":
                    if (number2 === 0) {
                        console.log("Error: Division by zero");
                    }
                    else {
                        answer = number1 / number2;
                        console.log("Result of division:", answer);
                    }
                    break;
                case "4":
                    answer = number1 * number2;
                    console.log("Result of multiplication:", answer);
                    break;
            }
            break;
        case "5":
            terminate = true;
            console.log("Terminating the program.");
            break;
        default:
            console.log("Invalid choice");
    }
}
