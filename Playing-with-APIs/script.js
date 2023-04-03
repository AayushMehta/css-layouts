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

// const list = document.querySelector(".list");
// // const liElement = document.createElement("li");

// const url = "https://jsonplaceholder.typicode.com/users";

// fetch(url)
//   .then((response) => response.json())
//   .then((users) => {
//     // console.log(users);
//     // let arr = [];
//     // for (let i = 0; i < users.length; i++) {
//     //   const liElement = document.createElement("li");
//     //   arr.push(users[i].name);
//     //   liElement.textContent = users[i].name;
//     //   list.appendChild(liElement);
//     // }

//     users.map((users) => {
//       //   // console.log(users.name);
//       //   arr = arr.push(users.name);
//       const liElement = document.createElement("li");
//       liElement.textContent = users.name;
//       list.appendChild(liElement);
//       //   list.textContent = users.name;
//       //   liElement.textContent =
//       // });
//       // console.log(arr);
//     });
//     // .catch((error) => console.error(error));
//   })
//   .catch((error) => console.error(error));

//running code ends //

// plaing with APIs

const list = document.querySelector(".list");
const url = "https://api.publicapis.org/entries";

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let arr = [];
    console.log(data.entries);
    for (i = 0; i < data.entries.length; i++) {
      if (data.entries[i].Cors === "yes" && data.entries[i].Auth === "") {
        arr.push(data.entries[i].API);
        const liElement = document.createElement("li");
        liElement.textContent = `${data.entries[i].API} : ${data.entries[i].Link}`;
        list.appendChild(liElement);
      }
    }
    // console.log(data.entries[0].API);
    console.log(arr);
  });
