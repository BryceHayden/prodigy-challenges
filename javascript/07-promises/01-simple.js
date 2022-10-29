function callBackend(isLoggedIn) {  
  return //You need to create the promise with two parameters here
    setTimeout(() => {
      if (isLoggedIn) {
        //Do the happy path here and return [{ name: 'john', age: 82 }, { name: 'Sammy', age: 18 }, { name: 'Tommy', age: 27 }]
        console.log("SOMETHING GOES HERE")
      } else {
        //Do the unhappy path here and return a messgae
        console.log("SOMETHING GOES HERE")
      }
    }, 3000)
  });
}

function main () {
  let users = []

  const results = callBackend(true)
  //Use the returned promise to get the happy path

  //Use the catch case for the unhappy path
}

main()
