const buttons = document.querySelectorAll<HTMLButtonElement>(
  ".calc-buttons__btn"
);

if (!buttons) {
  throw new Error("Issue with selector");
}

const handleButtonClick = (event: Event) => {
  console.log("the number was clicked", event);
};

buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});


//LOGIC

//1. when user clicks a number it shoukd be stored in a variable (string of numbers)
//2. when user clicks an operation should be stored in separate variable2 (operator string)
//3. when user clicks on numbers again after operation store in variable 3 (string of numbers)
//4. when user clicks equals sigh run a function that takes variable 1 and 3 and runs function for variable 2 
//5. when user clicks C, everything clears


