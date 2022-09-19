function main() {
  //create a variable using let with the name of name and assign it a value of "John"
  let name = "John";
  //create a variable using const with the name of user and assign it to an empty object
  const user = {};

  //set age to 42
  age = 42;
  //set employed to true
  employed = true;

  user.name = name;
  user.age = age;
  user.employed = employed;

  //create a variable using var with the name of age
  var age;

  //create a variable using var with the name of employed
  var employed;

  //DO not touch the following code. If you did things correctly, you'll see "Great you figured out how to create variables!!!"
  if (typeof user === "undefined" || typeof user !== "object") {
    console.log("Oh no, something is messed up with your 'user' variable.");
  }

  if (
    typeof name === "undefined" ||
    typeof name !== "string" ||
    name !== "John"
  ) {
    console.log("Crap, your 'name' variable isn't correct.");
  }

  if (typeof age === "undefined" || typeof age !== "number" || age !== 42) {
    console.log("Shoot the 'age' variable is off.");
  }

  if (
    typeof employed === "undefined" ||
    typeof employed !== "boolean" ||
    !employed
  ) {
    console.log("You better relook at the 'employed' variable and try again.");
  }

  console.log("User", user);
  if (user.name === "John" && user.age === 42 && user.employed) {
    console.log("Great you figured out how to create variables!!!");
  }
}

main();
