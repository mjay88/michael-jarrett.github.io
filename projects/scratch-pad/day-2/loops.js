// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
//i: array
//o: log array values to console using console.log
//c: n/a
//e: will input always be an array, what about arrays with a length of 0
  
//using a for loop to iterate over the input array and print its values to the console
  for(let i = 0; i < array.length; i++){
    console.log(array[i]);
  }
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
function printArrayValuesInReverse(array) {
//i: array
//o: log array values to console using console.log starting with the last element in the array and ending with the first
//c: n/a
//e: will input always be an array, what about arrays with a length of 0
  // YOUR CODE BELOW HERE //
    
//using a for loop to iterate over the input array and print its values to the console, backwards. start loop at the last eleement of the array, end at 0, subtract from i

for(let i = array.length - 1; i >= 0; i--){
  console.log(array[i])
}

  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
function getObjectKeys(object) {
 //i: object
//o: array of objects keys
//c: n/a
//e: will input always be an object
  
// YOUR CODE BELOW HERE //
//create array to be returned
let resultArray = [];
//use a for...in loop to iterate over object pushing its keys into an array, just the keys not the values
for(let key in object){
  resultArray.push(key);
}
//return array 
return resultArray;
 
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
function printObjectKeys(object) {
//i: object
//o: iterate over object, print object keys
//c: n/a
//e: will input always be an object
  // YOUR CODE BELOW HERE //
//use a for...in loop to iterate over object printing its keys to the console, just the keys not the values
  for(let key in object){
    console.log(key);
  }
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object's values.
 */
function getObjectValues(object) {
 //i: object
//o: array of objects values
//c: n/a
//e: will input always be an object
  
// YOUR CODE BELOW HERE //
//create array to be returned
let resultArray = [];
//use a for...in loop to iterate over object pushing its values into an resultArray
for(let key in object){
  resultArray.push(object[key]);
}
//return array 
return resultArray;
 
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
function printObjectValues(object) {
  //i: object
//o: iterate over object, print object values
//c: n/a
//e: will input always be an object
  // YOUR CODE BELOW HERE //
//use a for...in loop to iterate over object printing its values to the console
for(let key in object){
  console.log(object[key]);
}


// YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the number of key/value pairs stored within that Object.
 */
function getObjectLength(object) {
 //i: object
//o: number of key value pairs stored in the object
//c: n/a
//e: will input always be an object?

  // YOUR CODE BELOW HERE //
//create an array to return
// let resultArray = [];
// //use a for...in loop to iterate over object pushing it's keys and value into an array as sub array
// for(let key in object){
//   resultArray.push([key, object[key]])
// }
// //return the length of the array
// return resultArray.length;


//one line
return Object.keys(object).length;
// YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
function printObjectValuesInReverse(object) {
 //i: object
//o: print value in 'reverse'
//c: n/a
//e: will input always be an object?

  // YOUR CODE BELOW HERE //
//create an array to return
let resultArray = [];
//use a for...in loop to iterate over object pushing it's keys and value into an array as sub array
for(let key in object){
  resultArray.push(object[key])
}
//print out its values in reverse
for(let i = resultArray.length - 1; i >= 0; i--){
  console.log(resultArray[i]);
}

  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
