const span = document.getElementById('span')

window.addEventListener('mousemove', (e) => {
  console.log(e.screenX)

  span.style.setProperty('top', `${e.screenY - 100}px`)
  span.style.setProperty('left', `${e.screenX}px`)
})
