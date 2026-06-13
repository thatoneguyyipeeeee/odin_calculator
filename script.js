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

onOff.addEventListener('click', () => {
  text.classList.toggle('on'); 
});

buttons.forEach(button => {
    button.addEventListener("click", () => {
        if(button.textContent !== "Clear" && button.textContent !== "On/Off" && button.textContent !== "Enter"){
            text2.textContent += button.textContent;
        } else if(button.textContent == "Clear" || button.textContent == "On/Off"){
            text2.textContent = "";
        }
    })
})