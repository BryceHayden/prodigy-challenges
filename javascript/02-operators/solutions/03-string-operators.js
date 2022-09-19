function main() {
  //Do not change
  const TEST_STRING = "The quick brow fox jumps over the lazy dog.";
  const TEST_SWAP = "The quick brown fox learns to code.";

  let stringCheckOne = null;
  let stringCheckTwo = null;
  let start = "The quick brown fox";
  let end = "jumps over the lazy dog.";

  let user = {
    name: "Bryce",
    secret: {
      favoriteLine: "learns to code",
    },
  };

  //Combine the start and end of the strings
  let combinedOne = start + " " + end;

  // or
  combinedOne = `${start} ${end}`;

  // TODO write a equality check and see if TEST_STRING and your combined string are the same
  stringCheckOne = combinedOne === TEST_STRING;

  // TODO Add the user's favorite line to the start string and add an equality check to make sure it is the same as the TEST_SWAP variable
  let combinedTwo = start + " " + user.secret.favoriteLine + ".";
  //or
  combinedTwo = `${start} ${user.secret.favoriteLine}.`;

  stringCheckTwo = combinedTwo === TEST_SWAP;

  if (stringCheckOne && stringCheckTwo) {
    console.log("Nice job on the operators.");
  }
}

main();
