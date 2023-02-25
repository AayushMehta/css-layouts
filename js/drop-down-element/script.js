const button = document.getElementById("button");

// function eventManager(elem) {
//   elem.addEventListener("click", function (e) {
//     console.log(`${e.target.textContent} clicked`);
//   });
// }

button.addEventListener("click", (e) => {
  e.target.classList.toggle("active");
  // console.log(e.target.style);
  console.log("Button clicked");
  // console.log(e.target.classList);
});

// buttons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     console.log("Button clicked: " + button.textContent);
//   });
// });
