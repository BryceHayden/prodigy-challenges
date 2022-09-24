function callBackend(isLoggedIn, userCallback) {
  let usersOnbackend = [{ name: 'john', age: 82 }, { name: 'Sammy', age: 18 }, { name: 'Tommy', age: 27 }]
  setTimeout(() => {
    if (!isLoggedIn) {
      userCallback(true, [])
    } else {
      userCallback(false, usersOnbackend)
    }
  }, 3000);
}

function main () {
  let users = []

  callBackend(true, /* place your callback here, it should save to users */)
}

main()
