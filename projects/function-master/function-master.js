//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) {
  //object.values returns an objects values converted into an array of elements
  return Object.values(object);
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
  //use object.keys to get an array of object keys
  //use array.join to generate a string of those keys
  let string = Object.keys(object).join(" ");
  return string;
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
  //use object.values to get array of values
  let arrayOfValues = Object.values(object);
  //check which values are strings, use filter to get rid of other elements
  let arrayOfStringOnlyElements = arrayOfValues.filter(
    (el) => typeof el === "string"
  );
  //return all string values as one string seperated by a space, using join
  return arrayOfStringOnlyElements.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
  //assume only arrays or objects with key value pairs will be passed?
  //check if collection is an array with Array.isArray
  //return array if it is an array
  //return object if it is not an array
  //can accomplish using ternary operator
  return Array.isArray(collection) ? "array" : "object";
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
  //only capitalize the first letter
  //access string at index 0, upperCase index, add to rest of string using slice method
  //the slice method returns the entire string starting at the '1' index.
  return string[0].toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
  //capitalize all words in given string
  //console.log(string);
  //convert string to array of words
  //use map to iterate, then use capitalizeWord on each element then convert array back to string, one liner baby.
  //map takes in a iterable and a call back function and returns a copy of the iterable with the callback function called on each element.
  return string
    .split(" ")
    .map((el) => capitalizeWord(el))
    .join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
  //use string interpolation to return a value in a string
  return `Welcome ${capitalizeWord(object.name)}!`;
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
  //use string interpolation to return a value in a string
  //string interpolation allows us to excute functions directly inside of our string.
  return `${capitalizeWord(object.name)} is a ${capitalizeWord(
    object.species
  )}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
  //check if noises exists, if it is undefined, or if it is and empty array, validation
  //if falsy return message, if truthy, return noises array as string using join method
  return object.noises === null ||
    object.noises === undefined ||
    object.noises.length <= 0
    ? "there are no noises"
    : object.noises.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//3 solutioins
function hasWord(string, word) {
  //convert string into set...so we can use sets .has property
  //     let wordSet = new Set(string.split(" "));
  //
  // return wordSet.has(word);

  // let filteredArray = string.split(' ').filter(el => el === word);
  //  console.log(filteredArray);

  //  return filteredArray.length === 1 ? true : false;
  return string.split(" ").includes(word);

  //recursive solution

  //convert string into array

  //basecase, if word equals current element of array
  //return true

  //othercase if array.length === 0 return false

  //recursive case
  //function call with word slicing of element that we just checked
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend(name, object) {
  // console.log(name, object);
  //add name to objects friend array
  object.friends.push(name);
  //return object
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
  // console.log(name, object, object.friends)
  //validate that name exists and friends array exists
  if (
    name.length === 0 ||
    name === undefined ||
    object.friends === undefined ||
    object.friends.length === 0
  )
    return false;
  //return the result of running includes on friends array
  return object.friends.includes(name);
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//i : name, list of other that names friends
//o : an array string (names)
//c : nested access
//e :
//.some .includes
function nonFriends(name, array) {
  //filter array against given name to get given name obj
  let user = array.filter((el) => el.name === name);
  //assign friends array to filtered array
  let friends = user[0].friends;
  //create not friends array
  let notFriends = [];
  //iterate through given array
  for (let el of array) {
    //if current element is not the name passed as an arguement and it does not exist in friends array
    if (!friends.includes(el.name) && el.name !== name) {
      //push into notFriends array
      notFriends.push(el.name);
    }
  }
  //return notFriends array
  return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
  //use hasOwnProperty method to check if key exists
  if (object.hasOwnProperty(key)) {
//if it does exist, reassign it value passed as arguement
    object[key] = value;
  //if it does not exist (hasOwnProperty return boolean)
  } else {
    //create the key and assign it value
    object[key] = value;
  }
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
  //iterate through array
  for (let el of array) {
     //use hasOwnProperty method to check if current element exists as a property in object
    if (object.hasOwnProperty(el)) {
      //if we find it, delete it
      delete object[el];
    }
  }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
  //Set is a JavaScript object that only contains unique values, this does all the iterating an removing for us.
  return [...new Set(array)];
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports.objectValues = objectValues;
  module.exports.keysToString = keysToString;
  module.exports.valuesToString = valuesToString;
  module.exports.arrayOrObject = arrayOrObject;
  module.exports.capitalizeWord = capitalizeWord;
  module.exports.capitalizeAllWords = capitalizeAllWords;
  module.exports.welcomeMessage = welcomeMessage;
  module.exports.profileInfo = profileInfo;
  module.exports.maybeNoises = maybeNoises;
  module.exports.hasWord = hasWord;
  module.exports.addFriend = addFriend;
  module.exports.isFriend = isFriend;
  module.exports.nonFriends = nonFriends;
  module.exports.updateObject = updateObject;
  module.exports.removeProperties = removeProperties;
  module.exports.dedup = dedup;
}
