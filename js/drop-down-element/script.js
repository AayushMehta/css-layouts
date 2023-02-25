const button = document.getElementById('button')

// function eventManager(elem) {
//   elem.addEventListener("click", function (e) {
//     console.log(`${e.target.textContent} clicked`);
//   });
// }

// for (let i = 0; i < 3; i++) button[i].addEventListener('click')

button.addEventListener('mouseover', (e) => {
  e.target.classList.add('active')
  console.log('Button clicked')
})

button.addEventListener('mouseover', (e) => {
  e.target.classList.add('active')
  console.log('But=ton clicked')
})

// buttons.forEach(function (button) {
//   button.addEventListener("click", function () {
//     console.log("Button clicked: " + button.textContent);
//   });
// });
