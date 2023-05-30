"use strict";

// YOU KNOW WHAT TO DO //

/**
 * identity: Designed to take in any value and return that value, unchanged
 *
 *
 * @param any value: string, number, boolean, function, array, object ect...
 *
 */
function identity(value) {
  return value;
}
module.exports.identity = identity;

/**
 * typeOf: Designed to take in any value and return the JavaScript type of that value as a string
 *
 *
 *
 * @param {any value}: string, number, boolean, function, array, object ect...
 * @return {a string}: returns type of input as a string
 *
 */
function typeOf(value) {
  if (Array.isArray(value)) {
    return "array";
  } else if (value === null) {
    return "null";
  } else {
    return typeof value;
  }
}
module.exports.typeOf = typeOf;

/**
 * first: Designed to take in an array and a number and return the number of items starting at the beginning of the array
 *
 * @param {Array} : The array over which to iterate.
 * @param {Number} : the number of items to return starting at the first element of the array
 * @return {Array}: A copy of the input array only containing the amount of elements dictated by number input starting at the beginning of the input array
 *
 */

function first(array, number) {
  if (!Array.isArray(array)) return [];
  if (array.length === 0 || number < 0) return [];
  if (typeof number !== "number" || number === undefined || number === null)
    return array[0];
  if (number > array.length - 1) return array;
  return array.slice(0, number);
}
module.exports.first = first;

/**
 * last: Designed to take in an array and a number and return the number of items starting at the last index of the array
 *
 * @param {Array} The array over which to iterate.
 * @param {Number} the number of items to return starting at the last element of the array
 * @return {Array}: A copy of the input array only containing the amount of elements dictated by the number input starting at the last element of the input array
 * 
 */

function last(array, number) {
  if (!Array.isArray(array)) return [];
  if (array.length === 0 || number < 0) return [];
  if (typeof number !== "number" || number === undefined || number === null)
    return array[array.length - 1];
  return array.slice(number * -1);
}
module.exports.last = last;

/**
 * indexOf: Designed to take in an array and a target value and return the first occurance of the target value
 *
 *
 * @param {Array}: The collection over which to iterate.
 * @param {Value}: A target value to query its existance in the array
 * @return {Vale}: The found target value or -1 if not found
 *
 *
 */
function indexOf(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
module.exports.indexOf = indexOf;

/**
 * contains: Designed to take in an array and a value, and return a boolean based upon the value exisiting in the array
 *
 * @param {Array}: The array over which to iterate.
 * @param {Value}: A target value to query its existance in the array
 * @return {Boolean}: Returns true if target value exists in the input array otherwise returns false 
 *
 *
 *
 */
function contains(array, value) {
  return array.includes(value) && value !== undefined
    ? true
    : value === undefined
    ? undefined
    : false;
}
module.exports.contains = contains;

/**
 * each: Designed to loop over a collection, Array or Object, and applies the
 * action Function to each value in the collection.
 *
 * @param {Array or Object} : The collection over which to iterate.
 * @param {Function} : The Function to be applied to each value in the collection
 * @return : this function does not return a value
 * 
 */
function each(collection, action) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      action(collection[i], i, collection);
    }
  } else {
    for (var key in collection) {
      action(collection[key], key, collection);
    }
  }
}
module.exports.each = each;

/**
 * unique: Designed to take in an array and return a new array with only unique values, i.e., all duplicates removed.
 *
 * @param {Array} : The array over which to iterate and remove any duplicates, then save to a new a new array and return
 * @return {Array}: Returns the input array with all duplicate elements removes
 * 
 *
 */
function unique(array) {
  //create return array
  console.log(array, "og array");
  let uniqueArray = [];
  //iterate through array with for loop

  for (let i = 0; i < array.length; i++) {
    //check if value exists in uniqueArray already,
    if (uniqueArray.indexOf(array[i]) === -1) {
      //if it doesn't push current element into unqique array
      uniqueArray.push(array[i]);
    }
  }
  console.log(uniqueArray, "unqiuearray");
  return uniqueArray;
  //return [... new Set(array)];

}
module.exports.unique = unique;

/**
 * filter: Designed to take in an array and a callback function, and return a new array with only the elements that pass a conditional test outlined in the callback function
 *
 * @param {Array} : The array over which to iterate and call the callBack on every element, then save to a new array based on result of callBack and return
 * @param {callBack} : The callBack function which to apply to every element in the array, only returning the elements that return true
 * @return {Array}: Returns a new array with only the elements that pass a conditional test outlined in the callback function
 * 
 */
function filter(array, cb) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (cb(array[i], i, array) === true) {
      result.push(array[i]);
    }
  }
  return result;
}
module.exports.filter = filter;

/**
 * reject: Designed to take in an array and a callback function, and return a new array with only the elements that don't pass a conditional test outlined in the callback function
 *
 * @param {Array} : The array over which to iterate and call the callBack on every element, then save to a new array based on result of callBack and return
 * @param {callBack} : The callBack function which to apply to every element in the array, only returning the elements that return false
 * @return {Array}: Returns a new array with only the elements that don't pass a conditional test outlined in the callback function
 * 
 */
function reject(array, cb) {
  //create return array
  let result = [];
  //iterate through array
  for (let i = 0; i < array.length; i++) {
    //and call cb on each element of array, index, and the array
    if (cb(array[i], i, array) === false) {
      //it result of cb is false, push array into result array
      result.push(array[i]);
    }
  }
  //return new array
  return result;
}
module.exports.reject = reject;

/**
 * partition: Designed to take in an array and a callback function, and return a new array with two seperate arrays inside, one containing the elements that pass a conditional test outlined in the callback function, and the other containing the elements that don't pass the test
 *
 * @param {Array} : The array over which to iterate and call the callBack on every element, then save to a new array based on result of callBack and return
 * @param {callBack} : The callBack function which to apply to every element in the array, pushing the elements that return true into the first array and pushing the elements that return false into the second array
 * @return {Array}: Returns two new arrays with only the elements that pass a conditional test outlined in the callback function in one and the elements that don't pass the test in the other
 * 
 */
function partition(array, cb) {
  //create return array, which is an array with two empty arrays as element
  let result = [[], []];
  //iterate through array

  for (let i = 0; i < array.length; i++) {
    if (cb(array[i], i, array) === true) {
      //it result of cb is true, push array into appropriate result array
      result[0].push(array[i]);
      //otherwise, push result into alternative result array
    } else {
      result[1].push(array[i]);
    }
  }
  console.log(result, "partition result");
  return result;
}
module.exports.partition = partition;

/**
 * map: Designed to take in a collection and a callback function, and return a new array containing the results of calling the callback function on every element
 *
 *  @param {Array or Object} collection: The collection over which to iterate and call the callBack on every element, then save to a new array with the results of calling the callback function on each element
 *
 * @param {callBack} : The callBack function which to apply to every element in the collection, and pushing the results into a new array to return
 * @return {Array}: Returns a new array containing the results of calling the callback function on every element
 * 
 */
function map(collection, func) {
  let result = [];
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      result.push(func(collection[i], i, collection));
    }
  } else {
    for (let key in collection) {
      result.push(func(collection[key], key, collection));
    }
  }
  return result;
}
module.exports.map = map;

/**
 * pluck: Designed to take in an array of objects and property, and return a new array containing all the values of the given property for every element in the array
 *
 *  @param {Array}: The array of object over which to iterate and pull out
 *
 * @param {Prop} : The property to use to retrieve the property value of every element
 * 
 * @return {Array}: Returns a new array containing all the values of the given input property for every element in the array
 * 
 */

function pluck(array, prop) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(array[i][prop]);
  }
  return result;
}

module.exports.pluck = pluck;

/**
 * every: Designed to take in a collection, either an object or array, and a callback function and return true if the value of calling the callBack function on every element returns true, and false if calling the callBack returns false on any element
 *
 *  @param {Array or Object} collection: The collection over which to iterate and call the callBack function on every element
 *
 * @param {callBack} : The callBack function which to apply to every element in the array
 * 
 * @return {Boolean}: Returns true if the value of calling the callBack function on every element returns true, and false if calling the callback returns false on any element 
 */
function every(collection, cb) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (typeof cb !== "function") {
        if (
          collection[i] === false ||
          i === false ||
          collection === false ||
          collection[i].length === 0
        ) {
          return false;
        } else {
          return true;
        }
      }
      if (cb(collection[i], i, collection) === false) {
        return false;
      }
    }
    return true;
  } else {
    for (let key in collection) {
      if (typeof cb !== "function") {
        if (
          collection[key] === false ||
          key === false ||
          collection === false ||
          collection[key].length === 0
        ) {
          return false;
        } else {
          return true;
        }
      }
      if (cb(collection[key], key, collection === false)) {
        return false;
      }
    }
    return true;
  }
}
module.exports.every = every;

/**
 * some: Designed to take in a collection, either an object or array, and a callback function and return true if the value of calling the callBack function on one element returns true, and false if calling the callBack returns false for all elements
 *
 *  @param {Array or Object} collection: The collection over which to iterate and call the callBack function on every element
 *
 * @param {callBack} : The callBack function which to apply to every element in the array
 * 
 * @return {Boolean}: Returns true if the value of calling the callBack function on one element returns true, and false only if calling the callback returns false on all element 
 * 
 */
function some(collection, cb) {
  console.log(collection, "some");
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      if (typeof cb !== "function") {
        if (
          collection[i] === false ||
          i === false ||
          collection === false ||
          collection[i].length === 0
        ) {
          return false;
        } else {
          return true;
        }
      }
      if (cb(collection[i], i, collection) === true) {
        return true;
      }
    }
    return false;
  } else {
    for (let key in collection) {
      if (typeof cb !== "function") {
        if (
          collection[key] === false ||
          key === false ||
          collection === false ||
          collection[key].length === 0
        ) {
          return false;
        } else {
          return false;
        }
      }
      if (cb(collection[key], key, collection === true)) {
        return false;
      }
    }
    return true;
  }
}
module.exports.some = some;



/**
 * reduce: Designed to take in an array, a callback function, and a seed or initial value, and return a single value based on calling the callback function on every element of the array
 *
 *  @param {Array} collection: The array over which to iterate and call the callBack function on every element
 *
 * @param {Function} : The callBack function which to apply to every element, index, and the array
 * 
 *  @param {Seed} : The initial value which to add the result of calling the callback function on every element
 * 
 * @return {Value}: Returns a single value based on calling the callback function on every element of the array and adding that result to the seed value
 * 
 */
function reduce(array, cb, seed) {
    let previousResult;
    if (seed === undefined) {
      previousResult = array[0];
      for (let i = 1; i < array.length; i++) {
        previousResult = cb(previousResult, array[i], i, array);
      }
    } else {
      previousResult = seed;
      for (let i = 0; i < array.length; i++) {
        previousResult = cb(previousResult, array[i], i, array);
      }
    }
    return previousResult;
  };
  module.exports.reduce = reduce;


/**
 * extend: Designed to take in multiple objects as arguements, potentially n number of objects and copy the contents into a target object
 * 
 * @param {Object} object: initial object which to copy the properties of all the other arguements too
 * 
 * 
 * @param {Multiple Object} objects: objects which to copy the properties of and return as a single object
 * 
 * @return {Object}: Returns a single object with all the properties of the objects passed as arguements
 * 
 *
 * 
 */


function extend(object, ...args) {
    Object.assign(object, ...args);
    return object;
  };

module.exports.extend = extend;





  
  



