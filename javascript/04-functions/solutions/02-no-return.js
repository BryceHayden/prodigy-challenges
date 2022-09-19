//This variable has global scope for the file
const USER = {
  name: "Testing",
  age: null,
};

// create a function called updateUser that takes in two parameters (name, age)
// and DOESN'T return anything. Instead update the global variable USER's properties
// to the arguments provided to updateUser
const updateUser = (name, age) => {
  USER.name = name;
  USER.age = age;
};

// DO NOT ALTER anything below this comment.
function main() {
  if (typeof updateUser === "undefined" || typeof updateUser !== "function") {
    console.log("Oh no you need to work on creating a function");
    return;
  }

  updateUser("Samantha", 2);
  const testSam = Object.assign({}, USER);
  updateUser("Hunter", 1);
  const testHunter = Object.assign({}, USER);

  if (
    testSam.name !== "Samantha" ||
    testHunter.name !== "Hunter" ||
    testSam.age !== 2 ||
    testHunter.age !== 1
  ) {
    console.log(`Oh no you're function isn't working correctly`);
  } else {
    console.log("Congrats you passed this challenge");
  }
}

main();
