function main() {
  //TODO create a variable using let called name and assign it a value of "John"

  //TODO create a variable using const called user and assign it to an empty object

  //TODO set age to 42

  //TODO set employed to true

  user.name = name;
  user.age = age;
  user.employed = employed;

  //TODO create a variable using var called age

  //TODO create a variable using var called employed

  //DO not touch the following code. If you did things correctly, you'll see "Great you figured out how to create variables!!!"
  if (typeof user === undefined || typeof user !== "object") {
    console.log("Oh no, something is messed up with your 'user' variable.");
  }

  if (
    typeof name === undefined ||
    typeof name !== "string" ||
    name !== "John"
  ) {
    console.log("Crap, your 'name' variable isn't correct.");
  }

  if (typeof age === undefined || typeof age !== "number" || age !== 42) {
    console.log("Shoot the 'age' variable is off.");
  }

  if (
    typeof employed === undefined ||
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
