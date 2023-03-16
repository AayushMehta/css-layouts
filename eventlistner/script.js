const loop = document.querySelector(".loop").children;
console.log(loop);
// console.log(typeof btn);
// btn.addEventListner("click", function () {
//   console.log("one lcicked");
// });
const btn = document.getElementsByClassName("btn");
// console.log(btn.length);

for (let i = 0; i < btn.length; i++) {
  console.log((i + 1) % 2);
  console.log((i + 1) % 2 == 0);

  loop[i].addEventListener("click", function () {
    //     btn[i].textContent = `even button `;
    //   if ((i + 1) % 2 == 0) {
    //   } else {
    //     btn[i].textContent = `odd button `;

    //   }

    // });
    switch ((i + 1) % 2) {
      case 1:
        btn[i].textContent = `odd button `;
        break;
      case 0:
        btn[i].textContent = `even button `;
        break;
    }
  });
}
