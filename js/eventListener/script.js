const division = document.getElementById('division')
const heading = document.getElementById('heading')
const subheading = document.getElementById('subheading')
const paragraph = document.getElementById('paragraph')
const button = document.getElementById('button')

// const buttonHandler = () => {
//   console.log('button clicked')
// }

// DRY PRINCIPLE: DON'T REPEAT YOURSELF

// function eventHandler(e) {
//   console.log(`${e.target.textContent} clicked`)
// }

// function eventManager(elem) {
//   elem.addEventListener('click', eventHandler)
// }

// OPTIMIZED VERSION

function eventManager(elem) {
  elem.addEventListener('click', function (e) {
    console.log(`${e.target.textContent} clicked`)
  })
}

// eventManager(division)
// eventManager(heading)
// eventManager(subheading)
// eventManager(paragraph)
// eventManager(button)
// eventManager(window)
window.addEventListener('click', (e) => {
  // e.target.style.transition = 'all 1s ease-in'
  // e.target.style.background = 'red'
  // e.target.style.transform = 'translateX(100px)'
  e.target.classList.toggle('animate')
  // e.preventDefault()
  console.log(e.target.style)
  console.log(e.target.classList)
})
