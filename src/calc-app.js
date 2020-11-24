const number = document.querySelector(".number--js");

number.addEventListener("click", () => {
  const window = document. querySelector(".window--js");
  window.innerHTML += numbers;
  console.log(numbers);
});
               
 let numbers = number.innerText;


//math signs
const plus = document.querySelector(".plus--js");
const minus = document.querySelector(".minus--js");
const multi = document.querySelector(".multi--js");
const division = document.querySelector(".division--js");

const plusSign = "+";
const minusSign = "-";
const multiSign = "×";
const divisionSign = "÷";

//result and reset
const result = document.querySelector(".result--js");
const reset = document.querySelector(".reset--js");

//BUTTONS:
//plus
plus.addEventListener("click", () => {
  const window = document.querySelector(".window--js");
  window.innerHTML += plusSign;
});

//minus
minus.addEventListener("click", () => {
  const window = document.querySelector(".window--js");
  window.innerHTML += minusSign;
});

//multi
multi.addEventListener("click", () => {
  const window = document.querySelector(".window--js");
  window.innerHTML += multiSign;
});

//division
division.addEventListener("click", () => {
  const window = document.querySelector(".window--js");
  window.innerHTML += divisionSign;
});

//reset
reset.addEventListener("click", () => {
  const window = document.querySelector(".window--js");
  window.innerHTML = null;
  console.log("reset");
});