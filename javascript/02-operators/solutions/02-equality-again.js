function main() {
  let friends = [
    {
      name: "Joseph",
      age: 10,
      student: true,
    },
    {
      name: "Steve",
      age: 34,
      student: false,
    },
    {
      name: "Levi",
      age: 23,
      student: true,
    },
  ];

  let filterFriends = [];

  for (let i = 0; i < friends.length; i++) {
    let friend = friends[i];
    //Write a conditional check to see if the current friend is not a student or if they are older than 20
    //then wrap the following line inside the conditional
    if (!friend.student || friend.age > 20) {
      filterFriends.push(friend);
    }
  }

  if (
    filterFriends.length === 2 &&
    filterFriends[0].name === "Steve" &&
    filterFriends[1].name === "Levi"
  ) {
    console.log("You are doing great, and learning how to write conditionals.");
  } else {
    console.log("Oh no....your conditionals are off.");
  }
}

main();
