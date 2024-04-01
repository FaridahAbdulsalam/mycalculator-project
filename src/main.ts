
//Click Events
const digits = document.querySelectorAll<HTMLButtonElement>(
  ".calc-buttons__btn"
);

const operators = document.querySelectorAll<HTMLButtonElement>(
    ".calc-buttons__operator"
);

const equals = document.querySelector<HTMLButtonElement>(".calc-buttons__return");

const displayBox = document.querySelector(".user__output")

if (!digits || !operators || !displayBox || !equals) {
    throw new Error("Issue with selector");
}

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
    
    console.log(result);
};



//Event Listeners for when buttons are clicked
digits.forEach((digit) => {
    digit.addEventListener("click", handleDigitClick);
});

operators.forEach((operator) => {
    operator.addEventListener("click", handleOperatorClick)
});

equals.addEventListener("click", handleEqualsClick);







//LOGIC

//1. when user clicks a number it shoukd be stored in a variable (string of numbers)
//2. when user clicks an operation should be stored in separate variable2 (operators string)
//3. when user clicks on numbers again after operation store in variable 3 (string of numbers)
//4. when user clicks equals sigh run a function that takes variable 1 and 3 and runs function for variable 2 
//5. when user clicks C, everything clears

///operand1 operator operand2



/* 
input box will need to use HTMLElement: innerText
input.forEach((digit that is clicked) => display in box)

let calculation = `${initialValue} ${operator} ${currentValue}`

if(+){
    initialValue + currentValue
} else if(-){
    initialValue - currentValue
} else if(/){
    initialValue / currentValue
}else if(*){
    initialValue * currentValue
}

if(C){
    return empty box
}

if(=){
    return calcualtion
}

 */