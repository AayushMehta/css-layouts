const formEl = document.querySelector(".form");

formEl.addEventListener("submit", (e) => {
  e.preventDefault();
  const formdata = new FormData(formEl);
  const data = Object.fromEntries(formdata);

  fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
});
