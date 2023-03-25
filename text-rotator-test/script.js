const spanEl = document.querySelector(".span");
let word = "first";

const wordArr = [...word];
// console.log(wordArr);

let count = 0;

function rotateText() {
  spanEl.textContent += wordArr[count];
  count++;
  if (count === word.length) {
    clearInterval(intervalId);
  }
}

const intervalId = setInterval(rotateText, 300);
// wordArr.splice(-1, 1);
console.log(spanEl.textContent);

function deletee() {
  // spanEl.textContent = wordArr.splice(-1, 1);
  wordArr.splice(-1, 1);
  console.log(wordArr);
}

// for (let i = word.length - 1; i > 0; i--) {
//   if (wordArr.length > 0) {
//     wordArr.splice(-1, 1);
//     console.log(wordArr.join(""));
//     // spanEl.textContent -= wordArr;
//   }
// }

deletee();

// wordArr.splice(`${word.length - 1}`, 1);
// word.length--;
// console.log(wordArr);

// wordArr.splice(`${word.length - 1}`, 1);
// console.log(wordArr);

// for (let i = 0; i < word.length; i++) {
//   word = word.substring(1);
// }
// console.log(word);

// for (let i = word.length - 1; i > 0; i--) {
//   if (wordArr.length > 0) {
//     wordArr.splice(-1, 1);
//     console.log(wordArr.join(""));
//     spanEl.textContent -= wordArr;
//   }
// }

// tempLen = word.length;
// word.length = word.length - 1;

// wordArr.splice(word.length, 1);
// console.log(word.length);

// wordArr.splice(`${word.length - 1}`, 1);
// word.length--;
// console.log(wordArr);
// wordArr.splice(`${word.length - 1}`, 1);
// word.length--;
// console.log(wordArr);
