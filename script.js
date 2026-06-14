const onOff = document.querySelector(".on-off")
const text = document.querySelector(".text")
const buttons = document.querySelectorAll("button")
const text2 = document.querySelector(".text2")

/*  1. make the overall layout including css
    2. make the opperator command
    3. test the opperator thing
    4. hook up everything :)*/

function addition(num1, num2) {
    return num1 + num2;
}

function subtraction(num1, num2) {
    return num1 - num2;
}

function multiplication(num1, num2) {
    return num1 * num2;
}

function division(num1, num2) {
    return num1 / num2;
}

let answer = 0;

let number = []

let calculations = {
    num1: null,
    opperator: "",
    num2: null,
}

let placeholder = null;

onOff.addEventListener('click', () => {
  text.classList.toggle('on'); 
});

buttons.forEach(button => {
    button.addEventListener("click", () => {

        if(button.textContent !== "Clear" && button.textContent !== "On/Off" && button.textContent !== "Enter" && button.textContent !== "+" && button.textContent !== "-" && button.textContent !== "*" && button.textContent !== "/" && calculations.num1 == null && calculations.opperator == "" && calculations.num2 == null){
            number.push(button.textContent)
        } else if((button.textContent == "+" || button.textContent == "-" || button.textContent == "*" || button.textContent == "/") && calculations.opperator == ""){
            calculations.opperator = button.textContent;
            placeholder = Number(number.join(""));
            calculations.num1 = placeholder;
            number.length = 0;
            placeholder = null;
        } else if(button.textContent !== "Clear" && button.textContent !== "On/Off" && button.textContent !== "Enter" && button.textContent !== "+" && button.textContent !== "-" && button.textContent !== "*" && button.textContent !== "/" && calculations.num1 !== null && calculations.opperator !== "" && calculations.num2 == null){
            number.push(button.textContent); 
        }

        if(calculations.num1 !== null && calculations.opperator !== "" && calculations.num2 == null && number.length !== 0 && button.textContent == "Enter"){
            answer = 0;
            placeholder = Number(number.join(""));
            calculations.num2 = placeholder;
            number.length = 0;
            placeholder = null;
            if(calculations.opperator == "+"){
                answer = calculations.num1 + calculations.num2
                calculations.num1 = null;
                calculations.opperator = "";
                calculations.num2 = null;
                text2.textContent = answer;
                number.length = 0;
                placeholder = null;
            } else if(calculations.opperator == "-"){
                answer = calculations.num1 - calculations.num2
                calculations.num1 = null;
                calculations.opperator = "";
                calculations.num2 = null;
                text2.textContent = answer;
                number.length = 0;
                placeholder = null;
            } else if(calculations.opperator == "*"){
                answer = calculations.num1 * calculations.num2
                calculations.num1 = null;
                calculations.opperator = "";
                calculations.num2 = null;
                text2.textContent = answer;
                number.length = 0;
                placeholder = null;
            } else if(calculations.opperator == "/"){
                answer = calculations.num1 / calculations.num2;
                calculations.num1 = null;
                calculations.opperator = "";
                calculations.num2 = null;
                text2.textContent = answer;
                number.length = 0;
                placeholder = null;
            }
        }

        if((button.textContent == "+" || button.textContent == "-" || button.textContent == "*" || button.textContent == "/") && calculations.num1 !== null && calculations.opperator !== "" && calculations.num2 == null && number.length !== 0){
            placeholder = Number(number.join(""))
            
            if (calculations.opperator === "+") {
            calculations.num1 = calculations.num1 + placeholder;
            } else if (calculations.opperator === "-") {
            calculations.num1 = calculations.num1 - placeholder;
            } else if (calculations.opperator === "*") {
            calculations.num1 = calculations.num1 * placeholder;
            } else if (calculations.opperator === "/") {
            calculations.num1 = calculations.num1 / placeholder;
            }

            calculations.opperator = button.textContent;

            number.length = 0;
        }

        if(button.textContent == "Clear" || button.textContent == "On/Off"){
            answer = 0;
            text2.textContent = "";
            number.length = 0;
            let placeholder = null;
        }

        if(button.textContent !== "Clear" && button.textContent !== "On/Off" && button.textContent !== "Enter"){
            if(answer !== 0){
                text2.textContent = "";
                answer = 0;
                text2.textContent += button.textContent;
            } else if(answer == 0){
                text2.textContent += button.textContent;
            }
        }

    })
})