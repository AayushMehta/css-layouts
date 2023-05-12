// const rest = new Map();
// rest.set("name", "Classico Italiano");
// rest.set(1, "Firenze, Italy");
// console.log(rest.set(2, "Lisbon, Portugal"));
// rest
//   .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
//   .set("open", 11)
//   .set("close", 23)
//   .set(true, "We are open :D")
//   .set(false, "We are closed :(");
// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get(1));
// const time = 12;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));
// console.log(rest.has("categories"));
// rest.delete(2);
// console.log(rest);
// rest.clear();
// const arr = [1, 2];
// rest.set(arr, "Test");
// rest.set(document.querySelector("h1"), "Heading");
// console.log(rest);
// console.log(rest.size);
// console.log(rest.get(arr));

const newArray = [[1], [2, 3], [4, 5, 6]];

// console.log(newArray[0][0]);
// console.log(newArray[1][0]);
// console.log(newArray[1][1]);

// console.log(newArray);
temp = [];
newtemp = [];
newArray.map((arr) => {
  arr.map((newarr) => {
    // temp = arr;
    // console.log(newarr);
    newtemp = [...temp, newarr];
    console.log(newtemp);
    temp.push(newarr);
    // console.log(temp);
  });
  // console.log(arr);
});
console.log(newtemp);

// console.log(newArray);

// newArray.map(function (arr) {
//   console.log(arr);
// });

//Stale Closure Example

function createIncrementor(inc) {
  let value = 0;

  function logger() {
    let message = `the increment value is ${value}`;
    console.log(message);
  }

  function increment() {
    value = value + inc;
    console.log(value);
  }

  return [increment, logger];
}

const [increment, logger] = createIncrementor(1);

logger();
increment();
increment();
logger();
increment();
increment();
