// #!/usr/bin/env node

"use strict";

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is greater than the
 * base. Your function should return a function! First 4!
 */
function createGreaterThanFilter(base) {
  //i : base - can be either a string or a number
  //o : a function that returns a boolean?
  //c : returning a function
  //e :
  // YOUR CODE BELOW HERE //
  //create a function that takes in a value
  return function (value) {
    //if that input is greater than the base, return true,
    if (value > base) {
      return true;
      //otherwise return false
    } else {
      return false;
    }
  };

  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input base to test against, which could be a String or Number,
 * return a Function that tests whether a given value is less than the
 * base.
 */
function createLessThanFilter(base) {
  //i : base - can be either a string or a number
  //o : a function that returns a boolean?
  //c : returning a function
  //e :
  // YOUR CODE BELOW HERE //
  //create a function that takes in a value
  return function (value) {
    //if that input is less than the base, return true,
    if (value < base) {
      return true;
      //otherwise return false
    } else {
      return false;
    }
  };

  // YOUR CODE ABOVE HERE //
}

/**
 * Given a startsWith character, which will be a single character, return a
 * Function that tests whether a given String starts with the startsWith
 * character.
 */
function createStartsWithFilter(startsWith) {
  //i : a single character
  //o : a function that returns a boolean, depending on whether or not a given string starts with input character?
  //c : returning a function
  //e :case sensitive?
  // YOUR CODE BELOW HERE //
  //return a function that takes in a string
  return function(string){
    //if the first character of the string matches the startsWith input, return true
    if(string[0].toLowerCase() === startsWith.toLowerCase()){
        return true;
    //otherwise return false
    } else {
        return false;
    }

  }
  // YOUR CODE ABOVE HERE //
}

/**
 * Given a endsWith character, which will be a single character, return a
 * Function that tests whether a given String ends with the endsWith
 * character.
 */
function createEndsWithFilter(endsWith) {
  //i : a single character
  //o : a function that returns a boolean, depending on whether or not a given string ends with input character?
  //c : returning a function
  //e :case sensitive?
  // YOUR CODE BELOW HERE //
  //return a function that takes in a string
  return function(string){
    //if the first character of the string matches the startsWith input, return true
    if(string[string.length - 1].toLowerCase() === endsWith.toLowerCase()){
        return true;
    //otherwise return false
    } else {
        return false;
    }

  }
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an Array of Strings and a Function designed to modify a String,
 * return the Array of the Strings, modified.
 *
 * TIP: You need to loop over the Strings, right? We need to pass each String to
 * the modify Function, but we need to collect the results into some collection. Same as filterNums exercise. Modify is a function/ callback function
 */
function modifyStrings(strings, modify) {
  //i : an array of strings and a modify function
  //o : the array of strings, modified.
  //c : n/a
  //e : will it always be an array of strings???
  // YOUR CODE BELOW HERE //
  //create a results array that will hold our modified strings
    let modifiedArray = [];
  //iterate over stings array with a for loop
    for(let i = 0; i < strings.length; i++){
  //call modify function on each element of strings array and push them into modified array
    modifiedArray.push(modify(strings[i]))
    }
  //return modified array
 return modifiedArray;
  // YOUR CODE ABOVE HERE //
}

/**
 * Given an Array of Strings and a Function designed to test the String in some
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 *
 * Imagine you had a list of names, and you wanted to test they all
 * begin with "C", or they are all exclaimations that end with "!".
 *
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
function allStringsPass(strings, test) {
  //i : an array of strings and a test function
  //o : a boolean depending on whether or not all elements of strings array passed the test function
  //c : n/a
  //e : will it always be an array of strings, case sensitive???
  // YOUR CODE BELOW HERE //
  //iterate over array of strings, calling test function on every element in the array
 for(let i = 0; i < strings.length; i++){
  //if calling test on an element returns false, break out of loop and return false
    if(test(strings[i]) === false){
        return false;
    }
 }
  //if we make it through the entire loop, return true outside of loop
  return true;
  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.createGreaterThanFilter = createGreaterThanFilter;
  module.exports.createLessThanFilter = createLessThanFilter;
  module.exports.createStartsWithFilter = createStartsWithFilter;
  module.exports.createEndsWithFilter = createEndsWithFilter;
  module.exports.modifyStrings = modifyStrings;
  module.exports.allStringsPass = allStringsPass;
}
