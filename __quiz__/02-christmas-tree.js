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

function christmasTree() {}

//The following should all work
christmasTree();

christmasTree("ab");

christmasTree("a", 6);

christmasTree("ab", 16);
