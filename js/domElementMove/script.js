// const root = document.getElementById("root");

const span = document.getElementById("span");

window.addEventListener("mousemove", (e) => {
  console.log(e.screenX);
  // code is not optemised,  the text sholud follow the cursor according to the cordinates of the cursor in the div
  span.style.setProperty("top", `${e.screenY - 100}px`);
  span.style.setProperty("left", `${e.screenX - 45}px`);
});
