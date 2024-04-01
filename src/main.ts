
const operand1 = "";
const operand2 = "";
const operator = "";

//Click Events
const digits = document.querySelectorAll<HTMLButtonElement>(
  ".calc-buttons__btn"
);

const operators = document.querySelectorAll<HTMLButtonElement>(
    ".calc-buttons__operator"
);

const displayBox = document.querySelector(".user__output")

if (!digits || !operators || !displayBox) {
  throw new Error("Issue with selector");
}


//Event Handlers
const handleDigitClick = (event: Event) => {
    const digit = event.target as HTMLButtonElement;
    displayBox.innerHTML += digit.id; 
};

const handleOperatorClick = (event: Event) => {
    const operator = event.target as HTMLButtonElement;
    displayBox .innerHTML += operator.id;
};

const handleEqualsClick = (event: Event) => {
    console.log("This equals was clicked", event)
};






//Event Listeners for when buttons are clicked
digits.forEach((digit) => {
  digit.addEventListener("click", handleDigitClick);
});

operators.forEach((operator) => {
    operator.addEventListener("click", handleOperatorClick)
});








/* 
operand1
operand2
operator

 */

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