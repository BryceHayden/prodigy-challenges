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
  const callbackForPromise = (resolve, reject) => {
    let emp = employees.find((current) => current.id === userId);

    if (!emp) {
      reject({ err: true, msg: "Unknown employee", emp: null });
    } else {
      resolve({ err: false, msg: "Employee found", emp });
    }
  };

  return new Promise(callbackForPromise);
}

function main() {
  const userChecks = [
    "some-unknown-user-handle",
    "e582a642-e400-453f-b0f1-4aaa0a419cb5",
  ];

  for (let i = 0; i < userChecks.length; i++) {
    fakeBackend(userChecks[i])
      .then((res) => {
        console.log(res.emp);
      })
      .catch((res) => {
        console.log(`Oh no ${res.msg}`);
      });
  }
}

main();
