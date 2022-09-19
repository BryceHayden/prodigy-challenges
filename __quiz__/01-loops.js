
function main() {
  const users = [
    {
      name: 'John',
      age: 24,
      subscription: 'paid',
      employee: false
    },
    {
      name: 'Samantha',
      age: 4,
      subscription: 'paid',
      employee: false
    },
    {
      name: 'Jim',
      age: 21,
      subscription: 'unpaid',
      employee: true
    },
    {
      name: 'Brooke',
      age: 21,
      subscription: 'paid',
      employee: false
    },
    {
      name: 'Tom',
      age: 21,
      subscription: 'unpaid',
      employee: false
    },
    {
      name: 'Katie',
      age: 21,
      subscription: 'unpaid',
      employee: true
    }
  ]


  let forPaid = []
  let forUnpaid = []
  let forEmployees = []
  //using a for loop
  for(let i = 0; i < users.length; i++) {
    if(users[i].subscription === 'paid') {
      forPaid.push(users[i])
    } else if (users[i].subscription !== 'paid' && !users[i].employee) {
      forUnpaid.push(users[i])
    }

    if(users[i].employee) {
      forEmployees.push(users[i])
    }
  }

  //using .filter
  let filterPaid = users.filter(emp => emp.subscription === 'paid')
  let filterUnpaid = users.filter(emp => (emp.subscription !== 'paid' && !emp.employee))
  let filterEmployees = users.filter(emp => emp.employee)


  console.log('Paid (for): ', forPaid)
  console.log('Unpaid (for)', forUnpaid)
  console.log('Employees (for)', forEmployees)


  console.log('Paid (filter): ', filterPaid)
  console.log('Unpaid (filter)', filterUnpaid)
  console.log('Employees (filter)', filterEmployees)
}

main()
