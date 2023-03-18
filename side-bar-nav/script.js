const title = document.querySelectorAll(".title");
const list = document.querySelectorAll(".list");
const right = document.querySelector(".right").children;
const content = document.querySelector(".content");

const parent = document.querySelector(".right");

for (let i = 0; i < title.length; i++) {
  title[i].addEventListener("click", function (e) {
    title[i].nextElementSibling.classList.toggle("hidden");
  });
}

// console.log(list[0].children);

// list[0].children.classList.toggle("hidden");

for (let i = 0; i < list.length; i++) {
  list[i].addEventListener("click", () => {
    // right[i].classList.remove("hidden");
    for (let j = 0; j < right.length; j++) {
      (i === j && right[j].classList.remove("hidden")) ||
        (i !== j && right[j].classList.add("hidden"));
      // i === j
      //   ? right[j].classList.remove("hidden")
      //   : right[j].classList.add("hidden");
      // if (i === j) {
      //   right[j].classList.remove("hidden");
      // } else {
      //   right[j].classList.add("hidden");
      // }
    }
  });
}

// for (let i = 0; i < list.length; i++) {
//   console.log(
//     parent.children[i].nextElementSibling.classList.contains(!"hidden")
//   );
// }
