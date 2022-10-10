function callBackend(isLoggedIn, userCallback) {
  let usersOnbackend = [
    { name: "john", age: 82 },
    { name: "Sammy", age: 18 },
    { name: "Tommy", age: 27 },
  ];
  setTimeout(() => {
    if (!isLoggedIn) {
      //The user isn't logged in. Tell the frontend we have
      //uncovered an error and can't proceed. Give them back
      //an empty array since they don't have access to any data.
      userCallback(true, []);
    } else {
      //They are logged in so tell them there wasn't any errors
      // and provide them with the user who are currently online.
      userCallback(false, usersOnbackend);
    }
  }, 3000);
}

function main() {
  let users = [];

  // Notice this logic was confusing on purpose. I'm testing to see
  // if you are following the logic defined. The first parameter is a
  // boolean. When it's true the backend uncovered an "Error"
  function ourCallback(error, data) {
    if (error) {
      console.log("There was an error");
    } else {
      users = data;
      console.log("users", users);
    }
  }

  // Note we are passing a boolean variable back to our dummy backend
  // This is to mock out how we would do Authentication in a web app
  // by passing back a JWT or Session Token.
  // place your callback here, it should save to users
  callBackend(true, ourCallback);
}

main();
