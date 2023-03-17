const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum = sum + numbers[i];
  }
  console.log(sum);
};
add(1);
add(1, 2);
add(1, 2, 3);
add(1, 2, 3, 4);
