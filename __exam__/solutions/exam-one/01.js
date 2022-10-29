const users = [];
let paid = [123, 453, 213];
let unpaid = [];
let employee = [];

// change the object on paid to have a  new field
paid[0].cool = true;

for (let i = 0; i < users.length; i++) {
  if (users[i].subscription === "paid") {
    paid.push(users[i]);
  } else {
    unpaid.push(user[i]);
  }

  if (user[i].employee === true) {
    employee.push(user[i]);
  }
}

let filterPaid = users.filter((current) => current.subscription === "paid");
let filterUnpaid = users.filter((current) => current.subscription === "unpaid");
let filterEmployee = users.filter((current) => current.employee === true);
