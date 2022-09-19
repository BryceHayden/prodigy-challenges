function main() {
  //create a variable using const with the name of friends and assign it an empty array
  const friends = [];

  /*
    create a variable using const with the name of userOne and assign it to an object with:
        a key of name set to "Jane"
        a key of age set to 21
        a key of job set to "Software Engineer"
        a key of employed set to true
  */
  const userOne = {
    name: "Jane",
    age: 21,
    job: "Software Engineer",
    employed: true,
  };

  /*
    create a variable using const with the name of userTwo and assign it to an object with:
        a key of name set to "Brooke"
        a key of age set to 36
        a key of job set to "Sales Rep"
        a key of employed set to false
  */
  const userTwo = {
    name: "Brooke",
    age: 36,
    job: "Sales Rep",
    employed: false,
  };

  //Do not change the code below
  if (
    typeof userOne === "undefined" ||
    typeof userOne !== "object" ||
    userOne.name !== "Jane" ||
    userOne.age !== 21 ||
    userOne.job !== "Software Engineer" ||
    !userOne.employed
  ) {
    console.log("Check your userOne object.");
  }

  if (
    typeof userTwo === "undefined" ||
    typeof userTwo !== "object" ||
    userTwo.name !== "Brooke" ||
    userTwo.age !== 36 ||
    userTwo.job !== "Sales Rep" ||
    userTwo.employed
  ) {
    console.log("Check your userTwo object.");
  }
  //Don't change the code above

  //Update userOne's age to be 41
  userOne.age = 41;

  //Update userTwo's employed to true
  userTwo.employed = true;

  friends.push(userOne);
  friends.push(userTwo);

  //DO not touch the following code. If you did things correctly, you'll see "Amazing you created and updated variables"
  if (
    typeof userOne === "undefined" ||
    typeof userOne !== "object" ||
    userOne.name !== "Jane" ||
    userOne.age !== 41 ||
    userOne.job !== "Software Engineer" ||
    !userOne.employed
  ) {
    console.log("Check your userOne object.");
  }

  if (
    typeof userTwo === "undefined" ||
    typeof userTwo !== "object" ||
    userTwo.name !== "Brooke" ||
    userTwo.age !== 36 ||
    userTwo.job !== "Sales Rep" ||
    !userTwo.employed
  ) {
    console.log("Check your userTwo object.");
  }

  if (
    typeof friends === "undefined" ||
    friends.constructor !== Array ||
    friends.length !== 2
  ) {
    console.log("Dang it, your array creation is wrong.");
  } else {
    console.log("Amazing you created and updated variables");
  }
}

main();
