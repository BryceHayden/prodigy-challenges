function main() {
  //Do not change the varialbes themselves, but jump down to the conditional checks.
  let amountDue = 12.5;
  let moneyOwn = "12.50";
  let moneyCheckWeak = null;
  let moneyCheckStrong = null;

  /*TODO uncomment this line of code and assign it to an equality check (weak) testing if moneyOwn and amountDue are the same */
  moneyCheckWeak = moneyOwn == amountDue;
  /*TODO uncomment this line of code and assign it to an equality check (strong) testing if moneyOwn and amountDue are the same */
  moneyCheckStrong = moneyOwn === amountDue;

  //This conditional should check that the two variables (personOne, personTwo) are not equal
  //Only change the check portion of the conditional
  if (moneyCheckWeak) {
    console.log("Good job, that's some weak checking");
    if (!moneyCheckStrong) {
      console.log(
        "Congrats you're making amazing progress with the equality operators."
      );
    }
  }
}

main();
