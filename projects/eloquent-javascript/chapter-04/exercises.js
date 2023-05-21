////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//takes in 2 numbers
//outputs single number that is the range of all numbers between the two given numbers
//no constraints
//what about negative numbers, what if first input is larger than second?
//add default param for if no step is given
function range(num1, num2, step = 1) {
  //if num1 === num2 return empty arr
  if (num1 === num2) return [];
  //create return variable
  let arr = [];
  //is step is not a negative number
  if (step > 0) {
    //go from num1 to num2 and add to array
    for (let i = num1; i <= num2; i += step) {
      arr.push(i);
    }
  } else {
    //if step is a negative number
    for (let i = num1; i >= num2; i += step) {
      arr.push(i);
    }
  }
  return arr;
}
////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function sum(arr) {
  let count = 0;

  if (arr[0] < arr[arr.length - 1]) {
    for (let i = 0; i <= arr.length - 1; i++) {
      count += arr[i];
    }
  } else {
    for (let i = arr.length - 1; i >= 0; i--) {
      count += arr[i];
    }
  }

  return count;
}
////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
  let reversed = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//[1, 2 ,3 ,4 ,5]
function reverseArrayInPlace(arr) {
  // console.log(arr, 'og')
  //count from
  let temp;
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    temp = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = arr[i];
    arr[i] = temp;

    //  [arr[i], arr[arr.length- 1 - i]] = [arr[arr.length-1-i] , arr[i]]
    // console.log(i, (arr.length - 1 - i))
  }

  // console.log(arr, 'reveresed')
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function arrayToList(arr) {
  // console.log(arr);
  //  let list = {value : arr.length - 1, rest : null};
  let list = null;

  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }

  //  console.log(list);
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  // console.log(list, 'list');
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  // console.log(array)
  return array;
}

// function recursiveListToArray(list, output = []) {
//   if (list === null) {
//     return output;
//   }

//   output.push(list.value);

//   return recursiveListToArray(list.rest, output);
// }

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//takes an element and a list
//creates a new list that adds the element to the front of the input list
//
function prepend(value, list) {
  list = { value, rest: list };

  return list;
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//takse a list and a number
//return element at the given position in the list
function nth(list, number) {
  //if number less than zero return undefined
  if (number < 0) return undefined;
  //iterate through list
  let element;
  // console.log(list, number, 'params')
  for (let node = list; node; node = node.rest) {
    // console.log(`${node.value}`)
    if (node.value - 1 === number) {
      element = node;
    }
  }
  // console.log(element, 'element saved')
  return element.value === undefined ? undefined : element.value;
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//takes in two objects
//compare properties to see if equal
//edge cases : null returns object

function deepEqual(obj1, obj2) {
  // console.log(obj1, obj2, "args");

  //case where inputs are not objects
  if (
    typeof obj1 !== "object" &&
    obj1 !== null &&
    typeof obj2 !== "object" &&
    obj2 !== null
  ) {
    // console.log(obj1, obj2, "not objects");
    if (obj1 !== obj2) {
      return false;
    } else {
      return true;
    }
  }
  //case for falsey values
  if (!obj1 && !obj2) {
    return false;
  }
  // console.log('fuck')
  //make sure they are objects
  if (typeof obj1 === "object" && obj1 !== null) {
    if (typeof obj2 === "object" && obj2 !== null) {
      for (let key in obj1) {
        //check if keys are the same

        //check if key is object
        if (typeof obj1[key] === "object" && obj1[key] !== null) {
          if (typeof obj2[key] === "object" && obj2[key] !== null) {
            for (let el in obj1[key]) {
              console.log(Array.isArray(obj2[key][el]), obj2[key][el]);
              //check if keys are arrays
              if (
                Array.isArray(obj1[key][el]) &&
                Array.isArray(obj2[key][el])
              ) {
                console.log(obj1[key][el], obj2[key][el], "fucking arrays");
                //now we can iterate through arrays and compare
                for (let i = 0; i < obj1[key][el].length; i++) {
                  console.log(obj1[key][el][i], obj2[key][el][i]);
                  if (obj1[key][el][i] === obj2[key][el][i]) {
                    return true;
                  } else {
                    return false;
                  }
                }
              }
            }
          }
        }
        //if object keys are not equavalent
        if (obj1[key] !== obj2[key]) {
          return false;
        }
      }
    }
  }
  //compare objects with same proprties but different values
  return true;
}

// function deepEqual2(x, y){

//   //determine if Both x and y are not objects
//   if(typeof x !== 'object' && typeof y !== 'object'){
//     return x === y
//   }

//   //determine if on of  the values is still not an object
//   if(typeof x !== 'object' || typeof y !== 'object'){
//     return false;
//   }

//   let xKeys = Object.keys(x); // ['a']
//   let YKeys = Object.keys(y); // ['a', 'b'];
// //compare lengths
//   if(xKeys.length !== YKeys.length){
//     return false;
//   }

//   for(let i = 0; i < xKeys.length; i++){
//     //determine if yKeys doesn't include the current key
//     //or does the result of invoking deepEqual on the values at those keys not return a truthy response
//     if(!YKeys.includes(xKeys[i]) || !deepEqual(x[xKeys[i], y[xKeys[i]]])){
//       return false;
//     }
//   }

// return true;


// }
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
}
