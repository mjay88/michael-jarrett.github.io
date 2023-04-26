// #!/usr/bin/env node

"use strict";

/**
 * 3: range()
 *
 *  a. Create a function called range that takes two integers as
 *  parameters and returns an Array containing all integers
 *  between the two parameters, inclusively.  For example:
 *
 *      range(8, 14);  // => [8, 9, 10, 11, 12, 13, 14]
 *
 *  If the first argument is greater than the second,
 *  return the range in reverse order, ie:
 *
 *      range(14, 8);  // => [14, 13, 12, 11, 10, 9, 8]
 *
 *  TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best?
 *  c. you'll wanna make use of the push() method of Array.
 */
function range(start, end) {
  //i : two integers
  //o : an array containing all integers between the given inputs,
  //c : if start is less than end, return the range array in reverse order
  //e : assume all elements will always be numbers, what if inputs are the same number?

  // YOUR CODE GOES BELOW HERE //
  //create result array
  let resultArray = [];
  //determine whether start greater than or less than end input

  //if greater than, create for loop starting at start and stopping at end
  if (start < end) {
    //push all iterated values into result array
    for (let i = start; i <= end; i++) {
      resultArray.push(i);
    }
  } else if (end < start) {
    //if less than, create for loop starting at end and stopping at start param
    for (let i = end; i < start; i--) {
      //push all iterated values into result array
      console.log(i);
      resultArray.push(i);
    }
  }
  //return result array
  console.log(resultArray);
  return resultArray;
  // YOUR CODE GOES ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.range = range;
}
