const loop = document.querySelector(".loop").children;
console.log(loop);
// console.log(typeof btn);
// btn.addEventListner("click", function () {
//   console.log("one lcicked");
// });
const btn = document.getElementsByClassName("btn");
// console.log(btn.length);

for (let i = 0; i < btn.length; i++) {
  loop[i].addEventListener("click", function () {
    if ((i + 1) % 2 == 0) {
      // console.log(`odd button clicked`);
      btn[i].textContent = `even button `;
    } else {
      btn[i].textContent = `odd button `;

      // console.log(`even button clicked`);
    }

    // console.log(`clicked button ${i + 1}`);
  });
}
