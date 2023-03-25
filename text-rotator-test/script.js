const spanEl = document.querySelector(".span");
word = "first";
const wordArr = [...word];

let count = 0;
function rotateText() {
  spanEl.textContent += wordArr[count];
  count++;
  if (count === word.length) {
    clearInterval(intervalId);
  }
}
const intervalId = setInterval(rotateText, 300);

// let countt = 0;
// function rotateTeext() {
//   wordArr.pop();
//   spanEl.textContent = wordArr.join("");
//   countt++;
//   if (countt === 5) {
//     clearInterval(intervalIid);
//   }
// }
// const intervalIid = setInterval(rotateTeext, 300);
