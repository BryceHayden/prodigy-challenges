function main() {
  const users = [
    {
      name: "John",
      age: 24,
      subscription: "paid",
      employee: false,
    },
    {
      name: "Samantha",
      age: 4,
      subscription: "paid",
      employee: false,
    },
    {
      name: "Jim",
      age: 21,
      subscription: "unpaid",
      employee: true,
    },
    {
      name: "Brooke",
      age: 21,
      subscription: "paid",
      employee: false,
    },
    {
      name: "Tom",
      age: 21,
      subscription: "unpaid",
      employee: false,
    },
    {
      name: "Katie",
      age: 21,
      subscription: "unpaid",
      employee: true,
    },
  ];

  let forPaid = [];
  let forUnpaid = [];
  let forEmployees = [];
  //using a for loop, loop over the users array and filter out the paid, unpaid, and employees. Don't have any duplicates

  //Create new variables (filterPaid, filterUnpaid, filterEmployees) and using .filter do the same things as the for loop above

  console.log("Paid (for): ", forPaid);
  console.log("Unpaid (for)", forUnpaid);
  console.log("Employees (for)", forEmployees);

  console.log("Paid (filter): ", filterPaid);
  console.log("Unpaid (filter)", filterUnpaid);
  console.log("Employees (filter)", filterEmployees);
}

main();
