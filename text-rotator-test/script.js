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
console.log(spanEl.textContent);

function deletee() {
  for (let i = word.length - 1; i >= 0; i--) {
    let newString = word.substring(0, i);
    console.log(newString);
    spanEl.innerHTML -= newString[i];
    // spanEl.textContent += word.substring(0, i);
  }
}

deletee();
