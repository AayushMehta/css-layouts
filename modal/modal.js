const btn = document.querySelector(".button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");

btn.onclick = function () {
  modal.style.display = "block";
};

close.onclick = function () {
  modal.style.display = "none";
};
