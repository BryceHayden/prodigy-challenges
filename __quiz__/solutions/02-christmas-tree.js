/*
We need you to create a fun terminal decorator for our app.
When someone runs our program we should see a Christmas Tree. 
Create the tree using symbols. There are two key values that
will determine how the tree looks. Should the user gives you 
nothing then you would build a tree from asterisks (*) and
have a default number of branches/levels of 10. For example: 
                            * 
                           * *
                          * * *
                         * * * *
                        * * * * *
                       * * * * * *
                      * * * * * * *
                     * * * * * * * *
                    * * * * * * * * *
                   * * * * * * * * * *
                           * *
                           * *
                           * *
   


Otherwise, if they give you a character such as "a" you would 
alternate between the character and using asterisks to build
the tree. Such as 

                              a
                             * *
                            a a a
                           * * * *
                          a a a a a   
                             *  *
                             *  *

Notice the tree doesn't look as pretty due to the characters 
having a different spacing. Should the user give you a multiple
characters in the string you will alternate between them. Given 
a string of 'ab' you would build: 

                              a
                             * *
                            b b b
                           * * * *
                          a a a a a   
                             *  *
                             *  *
*/

function christmasTree(chars = "*", height = 10) {
  let marker = 0;

  for (let i = 0; i < height; i++) {
    let char = "*";

    //Alternate between a character (i.e. "a") and the asterisks branches
    //We are on a even branch (note the branches are numbered starting with 0 aka even)
    if (!(i % 2)) {
      //Get a single character from the chars parameter
      char = chars[marker];
      //check and see if we are at the end of the chars string
      if (marker + 1 === chars.length) {
        //Reset the marker back to the start
        marker = 0;
      } else {
        //move onto the next char
        marker += 1;
      }
    }

    //Note we use backticks `` and insert the variable char into the string after a space
    //Instead of having another for loop to cause the string to repeat we will use the built in method
    let branch = ` ${char}`.repeat(i + 1);
    let spacing = " ".repeat(height - (i + 1));
    console.log(spacing + branch);
  }

  //trunk
  let trunkHeight = height / 3;

  //Don't let the trunk go too low or too high
  if (trunkHeight < 2) {
    trunkHeight = 2;
  } else if (trunkHeight > 8) {
    trunkHeight = 8;
  }

  //Note we are using the "\n" to create a new line instead of having separate console.log()
  let trunk = (" ".repeat(height - 1) + "* *\n").repeat(trunkHeight);
  console.log(trunk);
}

//The following should all work
christmasTree();

christmasTree("ab");

christmasTree("a", 6);

christmasTree("abcd", 16);
