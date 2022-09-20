let unsorted = [2, 5, 6, 3, 1, 4, 7, 9, 8, 10];

// Look up on MDN for the Array.prototype.sort() which is used for sorting arrays
// Figure out how to use this to sort the array from lowest to highest, and from highest to lowest

// Sort lowest to highest

//NOTICE I AM USING THE NEW SYNTAX FOR FUNCTIONS
unsorted.sort((a, b) => {
  if (a > b) return 1;
  else if (a < b) return -1;
  return 0;
});

console.log(unsorted);

// Sort highest to lowest
unsorted.sort((a, b) => {
  if (a > b) return -1;
  else if (a < b) return 1;
  return 0;
});

console.log(unsorted);

let test = [
  2, 5, 6, 3, 1, 4, 7, 9, 8, 10, 12, 15, 13, 14, 11, 16, 19, 18, 17, 20,
];

// Now think through the logic you'll need for using "for loops" to do the same thing.
// Write out the logic to loop through and sort the array using your own logic (not the sort prototype)
for (let i = 0; i < test.length; i++) {
  for (let j = i + 1; j < test.length; j++) {
    if (test[i] > test[j]) {
      const temp = test[i];
      test[i] = test[j];
      test[j] = temp;
    }
  }
}

console.log(test);
