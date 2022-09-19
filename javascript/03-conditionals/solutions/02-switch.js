//This one won't output anything to the terminal when you correctly
//finish it...you will need to compare it to the solution

function main() {
  const weather = "snowing";

  //Write the commented out code below as a switch statement
  // if (weather === 'sunny') {
  //   console.log('You should not see this')
  // } else if (weather === 'raining') {
  //   console.log('You should not see this')
  // } else if (weather === 'snowing') {
  //   console.log('Man it is going to be cold...grab a coat')
  // }

  switch (weather) {
    case "sunny":
      console.log("You should not see this");
      break;
    case "raining":
      console.log("You should not see this");
      break;
    case "snowing":
      console.log("Man it is going to be cold...grab a coat");
      break;
  }
}

main();
