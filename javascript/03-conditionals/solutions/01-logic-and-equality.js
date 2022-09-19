function main() {
  //Do not change the varialbes themselves, but jump down to the conditional checks.
  let personOne = "Bryce";
  let personTwo = "Bruce";

  //This conditional should check that the two variables (personOne, personTwo) are not equal
  //Only change the check portion of the conditional
  if (personOne !== personTwo) {
    let job = true;
    let user = {
      name: "Dylan",
      age: 18,
      employer: "HP",
    };

    if (
      (job && user.name === "Samantha" && user.age === 18) ||
      user.employer === "HP"
    ) {
      console.log("Congrats you're making amazing progress with conditionals.");
    }
  }
}

main();
