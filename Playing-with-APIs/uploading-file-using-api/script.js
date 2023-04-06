/* Sending a file appended to a FormData object */

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  // Prevent default HTML page refresh
  event.preventDefault();

  const uploadElement = document.getElementById("file");
  const file = uploadElement.files[0];

  const payload = new FormData();
  payload.append("CV", file, "CV.jpg");

  fetch("https://httpbin.org/post", {
    method: "POST",
    body: payload,
  })
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
});

// const payload = new FormData();
// payload.append("CV", file, "CV.jpg");
// payload.append("First name", document.getElementById("firstName").value);
// payload.append("Last name", document.getElementById("lastName").value);

// for (let item of payload.entries()) {
//   console.log(item[0] + ", " + item[1]);
// }
