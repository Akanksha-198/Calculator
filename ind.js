let num1= document.querySelectorAll(".data1");
let num2 = document.querySelectorAll(".data2");
const operators = document.querySelectorAll(".choice");
const msg = document.querySelector("#output");

const operation=(userChoice) => {   
    let result = 0;
    switch (userChoice) {
        case "sum":
            result = num1 + num2;
            break;
        case "sub":
            result = num1 - num2;
            break;
        case "mul":
            result = num1 * num2;
            break;
        case "div":
            result = num1 / num2;
            break;
    }
    msg.innerHTML = result;
    console.log(result);
}



operators.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        operation(userChoice);
    });
});