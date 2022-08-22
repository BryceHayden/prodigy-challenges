//A function is made to carry out a specific task
//It may be called over and over again.
//If you give it the same data it will return the same thing
//but if you give it different data it will still return similar
//results but the value will be different.

//create a function called oddOrEven that takes in a single parameter
// and returns the string odd or even depend on the value of the number

  //determine if the number is odd or even by
  //using the modulus(%) operator, and return the string 'odd' or 'even'


  //DO NOT ALTER anything below here!!
  function main() {
    if(typeof oddOrEven === 'undefined' || typeof oddOrEven !== 'function') {
      console.log('Oh no you need to work on creating a function')
      return
    }
  
    const even = (oddOrEven(2) === 'even')
    const odd = (oddOrEven(3) === 'odd')
  
  
    if(!even || !odd) {
      console.log(`You have an error with your ${even ? 'even' : 'odd'} logic in your oddOrEven function`)
    } else {
      console.log('Congrats you passed this challenge')
    }
  }
  
  main()
  