//Notice that this problem looks almost the same, except that we are checking different things in the conditional
//checks near the end...hint pass by reference or complex data passing vs simplistic data

function determineBonus(employees) {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  //Write a loop to calculate each employee's bouns
  for (let i = 0; i < employees.length; i++) {
    const employeeHireYear = employees[i].hireDate.getFullYear();
    const yearsEmployed = currentYear - employeeHireYear;
    let bonusMultiplier = yearsEmployed / 3;

    if (bonusMultiplier > 5) {
      bonusMultiplier = 5;
    }

    let bonus = employees[i].salary * (bonusMultiplier / 100);
    //Round to nearest penny
    bonus = Math.floor(bonus * 100) / 100;
    employees[i].bonus = bonus;
  }
}

function determine401kAmount(employees, percent) {
  //Calculate the amount reduced from each check to put into
  //the employee's 401K it should be the <percent> over the
  //course of the year

  for (let i = 0; i < employees.length; i++) {
    const yearlyAmount = employees[i].salary * (percent / 100);
    let monthlyAmount = yearlyAmount / 12;
    //round to nearest penny
    monthlyAmount = Math.floor(monthlyAmount * 100) / 100;
    employees[i].retirement = monthlyAmount;
  }
}

function main() {
  //Here's a sample piece of data
  let employees = [
    {
      name: "Jane",
      salary: 152178,
      hireDate: new Date("December 17, 1995 03:24:00"),
    },
    {
      name: "John",
      salary: 83210,
      hireDate: new Date("May 28, 2011 08:24:00"),
    },
  ];

  determineBonus(employees);
  determine401kAmount(employees, 3);

  if (!employees[0].bonus || employees[0].bonus !== 7608.9) {
    console.log("You have an error with your bonus function");
    return;
  }
  if (!employees[1].retirement || employees[1].retirement !== 208.02) {
    console.log("You have an error with your 401k function");
    return;
  }

  //NOTICE I ADDED THIS FOR MY OWN SANITY CHECK. START TO FIGURE OUT HOW YOU'LL KNOW WHEN YOU FINISH
  //OR USE THE DEBUGGER...IT SHOULD BE YOUR BEST FRIEND RIGHT NOW
  console.log("YOU MADE IT");
}

main();
