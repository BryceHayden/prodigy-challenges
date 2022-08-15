function main() {
  //TODO create a variable using const called friends and assign it an empty array

  /*
    TODO create a variable using const called userOne and assign it to an object with:
        a key of name set to "Jane"
        a key of age set to 21
        a key of job set to "Software Engineer"
        a key of employed set to true
  */

  /*
    TODO create a variable using const called userTwo and assign it to an object with:
        a key of name set to "Brooke"
        a key of age set to 36
        a key of job set to "Sales Rep"
        a key of employed set to false
  */

  //Do not change the code below
  if (
    typeof userOne === undefined ||
    typeof userOne !== "object" ||
    userOne.name !== "Jane" ||
    userOne.age !== 21 ||
    userOne.job !== "Software Engineer" ||
    !userOne.employed
  ) {
    console.log("Check your userOne object.");
  }

  if (
    typeof userTwo === undefined ||
    typeof userTwo !== "object" ||
    userTwo.name !== "Brooke" ||
    userTwo.age !== 36 ||
    userTwo.job !== "Sales Rep" ||
    userTwo.employed
  ) {
    console.log("Check your userTwo object.");
  }
  //Don't change the code above

  //TODO Update userOne's age to be 41

  //TODO Update userTwo's employed to true

  //DO not touch the following code. If you did things correctly, you'll see "Amazing you created and updated variables"
  friends.push(userOne);
  friends.push(userTwo);

  if (
    typeof userOne === undefined ||
    typeof userOne !== "object" ||
    userOne.name !== "Jane" ||
    userOne.age !== 41 ||
    userOne.job !== "Software Engineer" ||
    !userOne.employed
  ) {
    console.log("Check your userOne object.");
  }

  if (
    typeof userTwo === undefined ||
    typeof userTwo !== "object" ||
    userTwo.name !== "Brooke" ||
    userTwo.age !== 36 ||
    userTwo.job !== "Sales Rep" ||
    !userTwo.employed
  ) {
    console.log("Check your userTwo object.");
  }

  if (
    typeof friends === undefined ||
    friends.constructor !== Array ||
    friends.length !== 2
  ) {
    console.log("Dang it, your array creation is wrong.");
  } else {
    console.log("Amazing you created and updated variables");
  }
}

main();
