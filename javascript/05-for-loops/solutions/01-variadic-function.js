// create a function called sum that can take as many arguments as the user supplies
// loop over the number of arguments and sum them together and then return that value
const sum = (...args) => {
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    //Note in a real program you'd check to make sure it is a number doing something like
    if (typeof args[i] === "number") {
      console.log("This can be added");
    }

    total += args[i];
  }

  return total;
};

// DO NOT ALTER anything below this comment.
function main() {
  if (typeof sum === "undefined" || typeof sum !== "function") {
    console.log("Oh no you need to work on creating a function");
    return;
  }

  const emptyArgs = sum();
  const oneArg = sum(1);
  const twoArgs = sum(1, 2);
  const threeArgs = sum(1, 2, 3);
  const sixArgs = sum(10, 5, 5, 15, -5, 20);

  if (
    emptyArgs !== 0 ||
    oneArg !== 1 ||
    twoArgs !== 3 ||
    threeArgs !== 6 ||
    sixArgs !== 50
  ) {
    console.log(`Oh no you're function isn't working correctly`);
  } else {
    console.log("Congrats you passed this challenge");
  }
}

main();
