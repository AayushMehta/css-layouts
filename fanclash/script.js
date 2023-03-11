const nav = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  console.log(window.pageYOffset);
  if (window.pageYOffset > 0) {
    nav.classList.add("dark-mode");
  } else {
    console.log(pageYOffset);
    nav.classList.toggle("dark-mode");
  }
});
