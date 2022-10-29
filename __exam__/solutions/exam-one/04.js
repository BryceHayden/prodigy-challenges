// Note I moved the employees array out of main so you can run the more realistic example
// below if you want to uncomment it.
let employees = [
  {
    name: "Bob",
    yearsEmployed: 6,
    salary: 80000,
  },
  {
    name: "Jane",
    yearsEmployed: 3,
    salary: 56000,
  },
  {
    name: "Tim",
    yearsEmployed: 11,
    salary: 110000,
  },
];

// The commented out code is more a realistic way to do the same logic
// I just needed to test you on functional generators

// function getEmployeeBonus (emp) {
//   if (emp.yearsEmployed > 10) {
//     return emp.salary * .3
//   } else if (emp.yearsEmployed > 5) {
//     return emp.salary * .2
//   } else {
//     return emp.salary * .1
//   }
// }

// for(let i = 0; i < employees.length; i++) {
//   employees[i].bonus = getEmployeeBonus(employees[i])
// }

function* employeeBonuses(emps) {
  for (let i = 0; i < emps.length; i++) {
    if (emps[i].yearsEmployed > 10) {
      yield emps[i].salary * 0.3;
    } else if (emps[i].yearsEmployed > 5) {
      yield emps[i].salary * 0.2;
    } else {
      yield emps[i].salary * 0.1;
    }
  }
}

function main() {
  const bonusCalculator = employeeBonuses(employees);

  console.log(
    `Pay ${employees[0].name} ${bonusCalculator.next().value} for his bonus`
  );
  console.log(
    `Pay ${employees[1].name} ${bonusCalculator.next().value} for her bonus`
  );
  console.log(
    `Pay ${employees[2].name} ${bonusCalculator.next().value} for his bonus`
  );
}

main();
