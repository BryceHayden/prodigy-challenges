let user = {
  name: "Bryce",
  age: 39,
  dev: true,
};

// get user's input and save to a variable
const userSelection = "age"; //we asked and got "age" back from user

// Notice square brackets to access something on an object dynamically versus
// hardcoding something like user.name
if (user[userSelection] !== undefined) {
  console.log("HERE IS THE USER INFO", user[userSelection]);
} else {
  console.log("Unknown key");
}
