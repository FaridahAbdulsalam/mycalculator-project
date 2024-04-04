import "./styles.scss";
//Click Events
const digits = document.querySelectorAll<HTMLButtonElement>(".calc-buttons__btn");
const operators = document.querySelectorAll<HTMLButtonElement>(".calc-buttons__operator");
const equals = document.querySelector<HTMLButtonElement>(".calc-buttons__return");
const backSpace = document.querySelector<HTMLButtonElement>(".calc-buttons__backspace")
const clear = document.querySelector<HTMLButtonElement>(".calc-buttons__clear");
const displayBox = document.querySelector<HTMLInputElement>(".display__view-calculation");
const displayResult = document.querySelector<HTMLInputElement>(".display__view-result");
const toggleButton = document.querySelector<HTMLButtonElement>("#toggle-on");
const toggleButtonOff = document.querySelector<HTMLButtonElement>("#toggle-off");
const calcBackgroundChange = document.querySelector<HTMLImageElement>(".calculator__container");


if (!displayBox || !displayResult || !calcBackgroundChange) {
    throw new Error("Issue with viewing selector");
}

if(!toggleButton || !toggleButtonOff || !digits || !operators || !equals || !backSpace ||!clear ){
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

const handleMistake = () => {
    if(num2){
        num2 = "";
        displayBox.textContent = num1 + operatorSign;
    }else if(operatorSign){
        operatorSign = "";
        displayBox.textContent = num1;
    }else if(num1){
        num1 = "";
        displayBox.textContent = "";
        hasCalledOperator = false;
    }
}


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
    } else{
    result = "Error"
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
        displayBox.style.color ="white";
        displayResult.style.color ="white";
        document.body.style.backgroundColor = "#585254";
    } 
}

const handleToggleLight = () =>{
    if(toggleButtonOff){
        toggleButtonOff.style.display = "none";
        toggleButton.style.display = "inline-block";
        calcBackgroundChange.style.backgroundImage = "";
        displayBox.style.color ="";
        displayResult.style.color ="";
        document.body.style.backgroundColor = "";

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
backSpace.addEventListener("click", handleMistake);
clear.addEventListener("click", handleClearClick);

toggleButton.addEventListener("click", handleToggleDark);
toggleButtonOff.addEventListener("click", handleToggleLight);

