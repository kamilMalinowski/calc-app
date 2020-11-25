//GREETING
console.log("Hello there");

//NUMBERS
// 1.
// 2.
// 3.
// 4.
// 5.
// 6.
// 7.
// 8.
// 9.
const keys = document.querySelector(".keys--js");
const display = document.querySelector(".display--js");

keys.addEventListener("click", (event) => {
  if (!event.target.closest("button")) return;

  const key = event.target;
  const keyValue = key.textContent;
  const displayValue = display.textContent;

  if (displayValue === "0") {
    display.textContent = keyValue;

  } else {
    display.textContent = displayValue + keyValue;
  }
  console.log(keyValue);
});


