// Update the function below to make it a function generator
// have it return the next employees id number. Also notice
// that it need the option to start at different numbers.
function* idMaker(starting = 1) {
  let id = starting;
  while (id < id + 1) yield id++;
}

function main() {
  let idBaseEmployee = idMaker();
  let idCorporateEmployee = idMaker(100);

  // Call the function generators to produce the id numbers
  let emp1 = idBaseEmployee.next().value;
  let emp2 = idBaseEmployee.next().value;

  let corp1 = idCorporateEmployee.next().value;
  let corp2 = idCorporateEmployee.next().value;

  console.log("First Challenge:");
  console.log("Emp 1: ", emp1); // 1
  console.log("Emp 2: ", emp3); // 2

  console.log("Corp Emp 1: ", corp1); // 100
  console.log("Corp Emp 2: ", corp2); // 101
}

main();
