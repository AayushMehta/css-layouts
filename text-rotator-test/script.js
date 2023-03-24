const spanEl = document.querySelector('.span')
const word = 'first'

const arr = ['f']

const wordArr = [...word]
console.log(wordArr)

let count = 0

function rotateText() {
  spanEl.textContent += wordArr[count]
  count++
  if (count === word.length) {
    clearInterval(intervalId)
  }
}

const intervalId = setInterval(rotateText, 200)
