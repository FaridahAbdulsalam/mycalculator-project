
const operand1 = "";
const operand2 = "";
const operator = "";


const digits = document.querySelectorAll<HTMLButtonElement>(
  ".calc-buttons__btn"
);

const operators = document.querySelectorAll<HTMLButtonElement>(
    ".calc-buttons__operator"
);

if (!digits || !operators) {
  throw new Error("Issue with selector");
}

const handleDigitClick = (event: Event) => {
const button = event.target as HTMLButtonElement;
  console.log("the number was clicked", button.id);
};

const handleOperatorClick = (event: Event) => {
    console.log("This operator was clicked", event)
};

const handleEqualsClick = (event: Event) => {
    console.log("This equals was clicked", event)
};

//Event handler for when the button is clicked.
digits.forEach((button) => {
  button.addEventListener("click", handleDigitClick);
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