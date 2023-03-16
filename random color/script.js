const randomcolor = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
];

function colorRandomizer() {
  const randomarray = [];
  for (let i = 0; i < 6; i++) {
    let rindex = Math.floor(Math.random() * randomcolor.length);

    let relement = randomcolor[rindex];

    randomarray.push(relement);
  }
  return randomarray;
}

function colorGenerator(randomarray) {
  let h = "#";
  for (i = 0; i < 6; i++) {
    if (i === ",") {
    } else {
      h = h + randomarray[i];
    }
  }
  return h;
}

document.querySelector("button").addEventListener("click", () => {
  document.body.style.background = colorGenerator(colorRandomizer());
});
// yeh string ke sath

// let randomcolor = "0123456789abcdef";
// let newcolor = "#";

// for (let i = 0; i < 6; i++) {
//   newcolor =
//     newcolor + randomcolor[Math.floor(Math.random() * randomcolor.length)];
// }
// console.log(newcolor);
// document.body.style.background = newcolor;
