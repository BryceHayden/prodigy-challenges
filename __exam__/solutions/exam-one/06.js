let employees = [
  {
    name: "Bob",
    id: "e582a642-e400-453f-b0f1-4aaa0a419cb5",
    yearsEmployeed: 6,
    salary: 80000,
  },
  {
    name: "Jane",
    id: "239ae3ce-da74-46cd-bd98-b98e9406a80b",
    yearsEmployeed: 3,
    salary: 56000,
  },
  {
    name: "Tim",
    id: "7e6a2835-0389-42ca-a4f6-321386fd6947",
    yearsEmployeed: 11,
    salary: 110000,
  },
];

function fakeBackend(userId, callback) {
  //Check to see if the userId exists for one of the employees
  //for loop to see if user is in array
  //find method on arrays that will return the entry matching your logic output is the same data type as is stored in the array
  //filter reduces the array entries to only ones that match your logic output is still array

  //let emp = employees.find(current => current.id === userId)
  // let emp = employees.filter(current => current.id === userId).pop() //[]
  let emp = null;

  for (let i = 0; i < employees.length; i++) {
    if (employees[i].id === userId) {
      emp = employees[i];
    }
  }

  if (!emp) {
    callback({ err: true, msg: "Unknown employee", emp: null });
  } else {
    return callback({ err: false, msg: "Employee found", emp });
  }
  //if the userId doesn't exist call the callback with an error object
  //for the first parameter with the fields err set to true, and msg set
  //to 'Unknown employee.' Otherwise return the employee info
}

function main() {
  const callback = (results) => {
    //If there's an error with the call to fakeBackend with a known employee id
    if (results.err) {
      console.log(`Oh no something happened: ${results.msg}`);
    } else {
      console.log(results.emp);
    }
    //When the callback gets a successful call, then console.log out the employee info
  };

  fakeBackend("some-unknown-user-handle", callback);
  fakeBackend("e582a642-e400-453f-b0f1-4aaa0a419cb5", callback);
}

main();
