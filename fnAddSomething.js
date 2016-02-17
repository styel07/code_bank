// Function that generates a random number range 1 - 10
// then adds either 1 or 2 if it is odd or even

var count = 0;

function addStuff(input) {
  // number is even
  input % 2 === 0 ? addTwo(input) : addOne(input);

  function addOne(input) {
    count += (input + 1);
  }

  function addTwo() {
    count += (input + 2);
  }
}

addStuff(Math.floor(Math.random() * 10 - 0 + 1));

console.log(count);