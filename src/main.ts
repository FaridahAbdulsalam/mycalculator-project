
//Click Events
const digits = document.querySelectorAll<HTMLButtonElement>(".calc-buttons__btn");
const operators = document.querySelectorAll<HTMLButtonElement>(".calc-buttons__operator");
const equals = document.querySelector<HTMLButtonElement>(".calc-buttons__return");
const clear = document.querySelector<HTMLButtonElement>(".calc-buttons__clear");
const displayBox = document.querySelector<HTMLButtonElement>(".display");

if (!digits || !operators || !displayBox || !equals || !clear) {
    throw new Error("Issue with selector");
}


//Variables
let operand1 = "";
let operand2 = "";
let operatorSign = "";
let hasCalledOperator = false;

//Event Handlers
const handleDigitClick = (event: Event) => {
    const digit = event.target as HTMLButtonElement;
    
    if(hasCalledOperator)
    {
       displayBox.innerHTML = operand2 += digit.id
    }
    else
    {
        displayBox.innerHTML = operand1 += digit.id
    }
};

const handleOperatorClick = (event: Event) => {
    const operator = event.target as HTMLButtonElement;
    hasCalledOperator = true;
    operatorSign = operator.id
    displayBox.innerHTML += operator.id
};

const handleEqualsClick = (event: Event) => {

    let result;

    if(operatorSign === "+"){
        result = Number(operand1) + Number(operand2)
    }else if(operatorSign === "-"){
        result = Number(operand1) - Number(operand2)
    }else if(operatorSign === "/"){
        result = Number(operand1) / Number(operand2)
    }else if(operatorSign === "*"){
        result = Number(operand1) * Number(operand2)
    } else{
    result = "unknown calculation"
    }
    
    displayBox.textContent = String(result)
};

const handleClearClick = (event: Event) => {
    displayBox.value = "";
    hasCalledOperator = false;
}



//Event Listeners for when buttons are clicked
digits.forEach((digit) => {
    digit.addEventListener("click", handleDigitClick);
});

operators.forEach((operator) => {
    operator.addEventListener("click", handleOperatorClick)
});

equals.addEventListener("click", handleEqualsClick);
clear.addEventListener("click", handleClearClick);







//LOGIC

//1. when user clicks a number it shoukd be stored in a variable (string of numbers)
//2. when user clicks an operation should be stored in separate variable2 (operators string)
//3. when user clicks on numbers again after operation store in variable 3 (string of numbers)
//4. when user clicks equals sigh run a function that takes variable 1 and 3 and runs function for variable 2 
//5. when user clicks C, everything clears

///operand1 operator operand2
