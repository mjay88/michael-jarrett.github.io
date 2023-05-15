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
  if(num1 === num2) return [];
//create return variable
  let arr = [];
//is step is not a negative number
  if (step > 0) {
    //go from num1 to num2 and add to array
    for (let i = num1; i <= num2; i += step){
      arr.push(i);
    }
  } else {//if step is a negative number
    for (let i = num1; i >= num2; i += step){
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

if(arr[0] < arr[arr.length - 1]){
  for(let i = 0; i <= arr.length - 1; i++){
    count += arr[i]
  }
} else {
  for(let i = arr.length - 1; i >= 0; i--){
    count += arr[i]
  }
}

return count;

}
////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function reverseArray(arr) {
 
  let reversed = [];

  for(let i = arr.length - 1; i >= 0; i--){
    reversed.push(arr[i])
  }
return reversed;

}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
//[1, 2 ,3 ,4 ,5]
function reverseArrayInPlace(arr) {
  // console.log(arr, 'og')
//re assign indexes
//count from 
let temp;
for(let i = 0; i < Math.floor(arr.length/2); i++){

  temp = arr[arr.length - 1 - i];
  arr[arr.length - 1 - i] = arr[i];
  arr[i] = temp
  

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

 for(let i = arr.length - 1; i >= 0; i--){
   list = {value : arr[i], rest : list}
 }

//  console.log(list);
 return list;

}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
console.log(list, 'list');
let array = []
for(let node = list; node; node = node.rest){

array.push(node.value)
}
console.log(array)
return array;


}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function prepend() {}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function nth() {}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function deepEqual() {}

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
