// var num = document.querySelector(".number");
// var negative = document.querySelector(".decrease");
// var positive = document.querySelector(".increase");

// let number = 0;
// num.textContent = number;
// positive.addEventListener("click", function () {
//   number += 1;
//   num.textContent = number;
//   document.querySelector(".number").textContent = number;
// });

// negative.addEventListener("click", function () {
//   number -= 1;
//   num.textContent = number;
//   console.log(num);
//   document.querySelector(".number").textContent = number;
// });

// const displayMessage = function (num) {
//   document.querySelector(".number").textContent = num;
// };
//
// negative.onclick = function () {
//   num = num - 1;
//   console.log(displayMessage);
// };
//
// function handleNumberInput(num) {
//   const inputValue = inputElement.value;
//
//   const inputNumber = parseFloat(inputValue);
// }
//

const num = document.querySelector(".number");
const add = document.querySelector(".add");
const subtract = document.querySelector(".subtract");

function handleNumberInput(num) {
  const inputValue = inputElement.value;

  const inputNumber = parseFloat(inputValue);
  number = inputNumber;
}

let number = 0;
num.textContent = handleNumberInput(number);

add.onclick = function () {
  number += 1;
  num.textContent = number;
};

subtract.addEventListener("click", function () {
  number -= 1;
  num.textContent = number;
});
