//GREETING
console.log("Hello there");

//NUMBERS
const calculator = document.querySelector(".calculator"); //this is main group of whole buttons
const keys = calculator.querySelector(".keys--js"); // this is group of buttons
const display = calculator.querySelector(".display--js"); // this is our window with value '0'

keys.addEventListener("click", (event) => {
  if (!event.target.closest("button")) return; //??protection from click something else??

  const key = event.target; //this is our button class
  const keyValue = key.textContent; //this is value of button
  const displayValue = display.textContent; //this is value of button display
  const type = key.dataset.type; //this is our type of button
  const previousKeyType = calculator.dataset.previousKeyType; //this is ???

  //number key
  if (type === "number") {
    if (displayValue === "0") {
      display.textContent = keyValue; //this replace displays value to buttons value
    } else if (previousKeyType === "operator") {
      display.textContent = keyValue; //this replace displays value to buttons value
    } else {
      display.textContent = displayValue + keyValue; //this add to button value next button value
    }
    console.log(keyValue); //this show us in console what we actualy click
  }

  //operation key
  if (type === "operator") {
    console.log(keyValue);

    calculator.dataset.firstNumber = displayValue;
    calculator.dataset.operator = key.dataset.key;
  }

  //equal key
  if (type === "equal") {
    const firstNumber = parseInt(calculator.dataset.firstNumber);
    const operator = calculator.dataset.operator;
    const secondNumber = parseInt(displayValue);

    let result = "";
    if (operator === "plus") result = firstNumber + secondNumber;
    if (operator === "minus") result = firstNumber - secondNumber;
    if (operator === "multi") result = firstNumber * secondNumber;
    if (operator === "division") result = firstNumber / secondNumber;

    display.textContent = result;
  }
  calculator.dataset.previousKeyType = type; //???
});
