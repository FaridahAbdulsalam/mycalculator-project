import "./styles.scss";
//Click Events
const digits = document.querySelectorAll<HTMLButtonElement>(".calc-buttons__btn");
const operators = document.querySelectorAll<HTMLButtonElement>(".calc-buttons__operator");
const equals = document.querySelector<HTMLButtonElement>(".calc-buttons__return");
const clear = document.querySelector<HTMLButtonElement>(".calc-buttons__clear");
const displayBox = document.querySelector<HTMLButtonElement>(".display__view-calculation");
const displayResult = document.querySelector(".display__view-result");
const toggleButton = document.querySelector<HTMLButtonElement>("#toggle-on");
const toggleButtonOff = document.querySelector<HTMLButtonElement>("#toggle-off");
const calcBackgroundChange = document.querySelector<HTMLImageElement>(".calculator__container");


if (!displayBox || !displayResult || !calcBackgroundChange) {
    throw new Error("Issue with viewing selector");
}

if(!toggleButton || !toggleButtonOff || !digits || !operators || !equals || !clear ){
    throw new Error ("Issue with click selector")
}


//Variables
let num1 = "";
let num2 = "";
let operatorSign = "";
let hasCalledOperator = false;

//Event Handlers
const handleDigitClick = (event: Event) => {
    const digit = event.target as HTMLButtonElement;

    if(hasCalledOperator)
    {
        num2 += digit.innerHTML
        displayBox.innerHTML = num1 + operatorSign + num2;
    }
    else
    {
        displayBox.innerHTML = num1 += digit.innerHTML
    }
};

const handleOperatorClick = (event: Event) => {
    const operator = event.target as HTMLButtonElement;
    hasCalledOperator = true;
    operatorSign = operator.innerHTML
    displayBox.innerHTML += operator.innerHTML
};

const handleEqualsClick = () => {

    let result;

    if(operatorSign === "+"){
        result = Number(num1) + Number(num2)
    }else if(operatorSign === "-"){
        result = Number(num1) - Number(num2)
    }else if(operatorSign === "/"){
        result = Number(num1) / Number(num2)
    }else if(operatorSign === "*"){
        result = Number(num1) * Number(num2)
    }else if(operatorSign === "%"){
        result = Number(num1) % Number(num2)
    }  else{
    result = "unknown calculation"
    }

    displayBox.innerHTML = num1 + operatorSign + num2; 
    displayResult.textContent = `= ${String(result)}`;

    num1 = "";
    num2 = "";
    operatorSign = "";
    hasCalledOperator = false;
};

const handleClearClick = () => {
    num1 = "";
    num2 = "";
    operatorSign = "";
    hasCalledOperator = false;
    displayBox.textContent = "";
    displayResult.textContent = "";
}



const handleToggleDark = () =>{
    if(toggleButton){
        toggleButtonOff.style.display = "inline-block";
        toggleButton.style.display = "none";
        calcBackgroundChange.style.backgroundImage = "linear-gradient(grey, black)"
    } 
}

const handleToggleLight = () =>{
    if(toggleButtonOff){
        toggleButtonOff.style.display = "none";
        toggleButton.style.display = "inline-block";
        calcBackgroundChange.style.backgroundImage = "";
    }
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

toggleButton.addEventListener("click", handleToggleDark);
toggleButtonOff.addEventListener("click", handleToggleLight);






//LOGIC

//1. when user clicks a number it should be stored in a variable (string of numbers)
//2. when user clicks an operation should be stored in separate variable2 (operators string)
//3. when user clicks on numbers again after operation store in variable 3 (string of numbers)
//4. when user clicks equals sigh run a function that takes variable 1 and 3 and runs function for variable 2 
//5. when user clicks C, everything clears

///num1 operator num2
