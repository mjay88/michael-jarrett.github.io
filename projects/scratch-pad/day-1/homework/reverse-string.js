// #!/usr/bin/env node

"use strict";

/**
 * 1: reverseString()
 *
 *  a. Create a function called reverseString that takes a
 *  String as its only input and returns a new String
 *  representing the input String reversed.  For example:
 *
 *      reverseString('hello');  // => 'olleh'
 *
 * TIPS:
 *  a. create something to collect the output you'll return.
 *  b. you'll need a loop, which one is best? How do you know
 *     when to stop looping?
 *  c. how do you access individual characters of a String?
 *  d. how do you concatenate Strings? What operator do we use?
 */

function reverseString(input) {
  // YOUR CODE GOES BELOW HERE //
  // i : a string
  // o : the string reversed
  // c : n/a
  // e : should be able to accomplish in one line,  how to do recursively?

  //using reverse array method...
  //convert input into array of individual letters
  //  let arrayOfLetters = input.split('');
  // //use reverse method on array
  // let reversedArray = arrayOfLetters.reverse();
  // //use join method on array
  // let reversedInput = reversedArray.join('');
  // //return joined array
  //   return reversedInput;

  //one line
  // return input.split("").reverse().join("");

  //recursive pseudocode

 // create return string variable
   let reversedString = "";
    //base case, once length of array is 0 return
  if(input.length === 0){
    console.log('no more')
    console.log(reversedString);
    return reversedString;
  }
    //recusive case : grab the last index of input string, concat onto  return string variable

   reversedString + input[input.length - 1]
   console.log(input[input.length - 1]);
  console.log(reversedString);
   return reversedString + input[input.length - 1] + (reverseString(input.slice(0, input.length - 1)))

  // YOUR CODE GOES ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.reverseString = reverseString;
}
