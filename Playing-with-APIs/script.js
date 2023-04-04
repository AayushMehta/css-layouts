// fetch("https://restcountries.com/v3.1/all")
//   .then((response) => {
//     return response.json();
//     console.log(response.json());
//   })
//   .then((data) => {
//     console.log(data[0]);
//   });

// const url = "https://restcountries.com/v3.1/all";

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     let arr = [];
//     for (let i = 0; i < data.length; i++) {
//       arr.push(data[i].capital);
//       // const arr = [...data[i].capital];
//     }
//     console.log(arr);
//     return arr;
//   })

//   .catch(() => {});

// fetch(url).then().then().then().then().catch();

//running code starts

const list = document.querySelector(".list");
// const liElement = document.createElement("li");

const url = "https://jsonplaceholder.typicode.com/users";

fetch(url)
  .then((response) => response.json())
  .then((users) => {
    // using map starts
    users.map((users) => {
      const liElement = document.createElement("li");
      liElement.textContent = users.name;
      list.appendChild(liElement);
    });
  })
  .catch((error) => console.error(error));

//using map ends

//using for starts

// console.log(users);
// let arr = [];
// for (let i = 0; i < users.length; i++) {
//   const liElement = document.createElement("li");
//   arr.push(users[i].name);
//   liElement.textContent = users[i].name;
//   list.appendChild(liElement);
// }

//using for ends

//running code ends //

// plaing with  Public APIs

// const list = document.querySelector(".list");
// const url = "https://api.publicapis.org/entries";

// fetch(url)
//   .then((response) => response.json())
//   .then((data) => {
//     let arr = [];
//     console.log(data.entries);
//     for (i = 0; i < data.entries.length; i++) {
//       if (data.entries[i].Cors === "yes" && data.entries[i].Auth === "") {
//         arr.push(data.entries[i].API);
//         const liElement = document.createElement("li");
//         liElement.textContent = `${data.entries[i].API} : ${data.entries[i].Link}`;
//         list.appendChild(liElement);
//       }
//     }
//     // console.log(data.entries[0].API);
//     console.log(arr);
//   });

// code for POST Start

// let options = {
//   method: "POST",
//   headers: {
//     "Content-type": "application/json",
//   },
//   body: JSON.stringify({
//     title: "foo",
//     body: "bar",
//     userId: 11,
//   }),
// };
// fetch("https://jsonplaceholder.typicode.com/users", options)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//code for POST ends

//code for PUT starts

let options = {
  method: "PUT",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify({
    title: "foo",
    body: "bar",
    userId: 11,
  }),
};
fetch("https://jsonplaceholder.typicode.com/users/10", options)
  .then((response) => response.json())
  .then((data) => console.log(data));

// const createTodo = async (todo) => {
//   let options = {
//     method: "POST",
//     headers: {
//       "Content-type": "application/json",
//     },
//     body: JSON.stringify(todo),
//   };

// const getTodo = async (id) => {
//   let response = await fetch(
//     "https://jsonplaceholder.typicode.com/posts/" + id
//   );
//   let r = await response.json();
//   return r;
// };

// const mainFunc = async () => {
//   let todo = {
//     title: "foo",
//     body: "bar",
//     userId: 1,
//   };
//   let todor = await createTodo(todo);
//   console.log(todor);
//   console.log(await getTodo(101));
// };

// mainFunc();
