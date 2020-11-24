console.log("Hello there");

//plus
const plus = document.querySelector(".plus--js");
const plusSign = "+";
plus.addEventListener("click", () => {

  const window = document.querySelector(".window--js");
  window.innerHTML += plusSign;
  console.log("+");
});

//minus
const minus = document.querySelector(".minus--js");
const minusSign = "-";
minus.addEventListener("click", () => {

  const window = document.querySelector(".window--js");
  window.innerHTML += minusSign;
  console.log("-");
});

//multi
const multi = document.querySelector(".multi--js");
const multiSign = "x";
multi.addEventListener("click", () => {

  const window = document.querySelector(".window--js");
  window.innerHTML += multiSign;
  console.log("x");
});

//division
const division = document.querySelector(".division--js");
const divisionSign = "/";
division.addEventListener("click", () => {

  const window = document.querySelector(".window--js");
  window.innerHTML += divisionSign;
  console.log("/");
});

//reset
const reset = document.querySelector(".reset--js");

reset.addEventListener("click", () => {
  const window = document.querySelector(".window--js");
  window.innerHTML = null;
  console.log("reset");
});
