/* create a function called sum that has 3 parameters with two defaulted to 4 values */
const sum = (x, y = 4, z = 4) => {
  return x + y + z;
};

function main() {
  if (typeof sum !== "function") {
    console.log("You need to create the sum function");
    return;
  }

  const resultsOne = sum(1, 2, 3);
  const resultsTwo = sum(1);
  const resultsThree = sum(2, 6);
  const resultsFour = sum(2, 6, 6);

  if (
    resultsOne !== 6 &&
    resultsTwo !== 9 &&
    resultsThree !== 12 &&
    resultsFour !== 14
  ) {
    console.log("Oh no something is not right");
  } else {
    console.log("Great job on creating a function using default parameters");
  }
}

main();
