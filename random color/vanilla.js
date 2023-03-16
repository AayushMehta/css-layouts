const firstName = "aayush";

function namePusher() {
  let emptyArray = [];
  for (let i = 0; i < firstName.length; i++) {
    emptyArray.push(firstName[i]);
  }
  console.log(emptyArray);
  const str = emptyArray.join("");
  return str;
}

console.log(namePusher());
