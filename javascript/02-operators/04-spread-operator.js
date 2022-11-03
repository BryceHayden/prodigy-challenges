function main() {
  let users = [{ name: "John" }, { name: "Adam" }, { name: "Ashley" }];
  let emps = [{ name: "Kim" }, { name: "Dan" }];

  // There are multiple ways you could complete this challenge.
  // One way is to use the concat operator for arrays as you can check out here:
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
  // The other way is through the spread operator. Give it a try.
  let combo = console.log("Spread Challenge"); //complete this line of code
  console.log("Combo: ", combo); //[{ name: "John" }, { name: "Adam" }, { name: "Ashley"}, { name: "Kim" }, { name: "Dan" }]
}

main();
