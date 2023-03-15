// var num = document.querySelector(".number");
// // var negative = document.querySelector(".decrease");
// // var positive = document.querySelector(".increase");

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

// // const displayMessage = function (num) {
// //   document.querySelector(".number").textContent = num;
// // };
// //
// negative.onclick = function () {
//   num = num - 1;
//   console.log(displayMessage);
// };
//
// // function handleNumberInput(num) {
// //   const inputValue = inputElement.value;
// //
// //   const inputNumber = parseFloat(inputValue);
// // }
// //

// const num = document.querySelector(".number");
// const add = document.querySelector(".add");
// const subtract = document.querySelector(".subtract");
// let inputValue = document.getElementById("input");
// console.log(inputValue);
// function getInputValue() {}

// // function handleNumberInput(num) {
// //   const inputValue = inputElement.value;

// //   const inputNumber = parseFloat(inputValue);
// //   number = inputNumber;
// // }

// let number = document.getElementById("input").value;
// let parsedNumber = parseFloat(number);
// console.log(parsedNumber);
// add.onclick = function () {
//   number += 1;
//   console.log(number);
//   // document.getElementById("output").innerHTML = number;
//   num.textContent = number;
// };

// subtract.addEventListener("click", function () {
//   number -= 1;
//   // num.textContent = number;
// });

const inputEl = document.getElementById("input");
const subtract = document.querySelector(".subtract");
const add = document.querySelector(".add");

add.addEventListener("click", function () {
  +inputEl.value++;
});
subtract.addEventListener("click", function () {
  +inputEl.value--;
});
