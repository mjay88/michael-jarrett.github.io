// #!/usr/bin/env node

"use strict";

/**
 * IN CLASS EXERCISE: TYPE
 */

/**
 * Given an input value, return true if the value is an Array, false if otherwise.
 *
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
  //i : a value
  //o : a boolean depending on whether or not input value is an array or not
  //c : n/a
  //e : an array is an object, watch out
  // YOUR CODE BELOW HERE //
  //use the Array.isArray method to determine whether or not value is an array
  return Array.isArray(value);

  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return true if the value is an Object intended as a
 * collection, (key value pairs) false if otherwise.
 *
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not
 * null, not an Array, not a Date - all of these will return 'object' if used
 * with typeof.
 */
function isObject(value) {
  //i : a value
  //o : true if value is an object intended as a collection
  //c : need to check against other types that return true for object, date, and array
  //e : see key in object freecode camp tutorial
  // YOUR CODE BELOW HERE //
  //check if value is an array, return fasle if so
  if (value === undefined) {
    return false;
  }
  if (typeof value === "string") {
    return false;
  }

  if (typeof value === "number") {
    return false;
  }

  if (typeof value === "boolean") {
    return false;
  }

  if (Array.isArray(value)) {
    return false;
    //check if value is a date, return false if so
  }
  if (value instanceof Date) {
    return false;
    //check if value is null, return false if so
  }
  if (value === null) {
    return false;
  }
  if (value === undefined) {
    return false;
  }
  if (typeof value === "object") {
    //check if value is object, return true if so
    return true;
  }

  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return true if is either an Array or an an Object
 * intended as a collection, false if otherwise.
 *
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
  //i : a value
  //o : true if value is an object intended as a collection
  //c : need to check against other types that return true for object, date, and array
  //e : see key in object freecode camp tutorial
  // YOUR CODE BELOW HERE //
  //check if value is an array, return fasle if so
  if (value === undefined) {
    return false;
  }
  //check if value is a sting
  if (typeof value === "string") {
    return false;
  }
  //check if value is a number
  if (typeof value === "number") {
    return false;
  }
  //check if value is a boolean
  if (typeof value === "boolean") {
    return false;
  }
  //check if value is an array, return true
  if (Array.isArray(value)) {
    return true;
    //check if value is a date, return false if so
  }
  if (value instanceof Date) {
    return false;
    //check if value is null, return false if so
  }
  if (value === null) {
    return false;
  }
  if (value === undefined) {
    return false;
  }
  if (typeof value === "object") {
    //check if value is object, return true if so
    return true;
  }

  // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 *
 * Types are one of:
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 *
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */
function typeOf(value) {
  //i : a value
  //o : output the type of value as a string
  //c : need to check against other types that return true for object, date, and array, all other types
  //e : see key in object freecode camp tutorial
  // YOUR CODE BELOW HERE //

  //check if value is an array, return fasle if so
  if (value === undefined) {
    return 'undefined'
  }
  //check if value is a sting
  if (typeof value === "string") {
    return 'string';
  }
  //check if value is a number
  if (typeof value === "number") {
    return 'number';
  }
  //check if value is a boolean
  if (typeof value === "boolean") {
    return 'boolean';
  }
  //check if value is an array, return true
  if (Array.isArray(value)) {
    return 'array';
    //check if value is a date, return false if so
  }
  if (value instanceof Date) {
    return 'date';
    //check if value is null, return false if so
  }
  //check if value is null
  if (value === null) {
    return 'null';
  }
  //check if value is a function
  if (typeof value === 'function') {
    return 'function';
  }
  //check if value is an object
  if (typeof value === "object") {
    //check if value is object, return true if so
    return 'object';
  }

  // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.isArray = isArray;
  module.exports.isObject = isObject;
  module.exports.isCollection = isCollection;
  module.exports.typeOf = typeOf;
}
