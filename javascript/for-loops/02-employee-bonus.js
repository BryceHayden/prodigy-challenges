
function determineBonus(employees) {
  //Write a loop to calculate each employee's bouns

  //For every 3 years the person has been employeed, increase their
  //salary by 1 %, but do not increase anyones over 5 %


}

function determine401kAmount(employees, percent) {
  //Calculate the amount reduced from each check to put into
  //the employee's 401K it should be the <percent> over the
  //course of the year
}

function main() {
  //Here's a sample piece of data
  let employees = [{
    name: 'Jane',
    salary: 152178,
    hireDate: new Date('December 17, 1995 03:24:00')
  }, {
    name: 'John',
    salary: 83210,
    hireDate: new Date('May 28, 2011 08:24:00')
  }]

  const bonus = determineBonus(employees)
  const retirement = determine401kAmount(employees, 3)

  if (typeof bonus === 'undefined' || bonus.length === 0 || bonus[0] !== 7608.90) {
    console.log("You have an error with your bonus function")
  }
  if (typeof retirement === 'undefined' || retirement.length === 0 || retirement[1] !== 208.02) {
    console.log("You have an error with your 401k function")
  }
}


main()