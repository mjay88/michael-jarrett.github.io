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
  //console.log(object)
  //reference above
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
  return `${capitalizeWord(object.name)} is a ${capitalizeWord(
    object.species
  )}`;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
  //   //check if noises exists...
  //     if(object.noises === null || object.noises === undefined) return ;

  //     console.log(object.noises.length)
  //     //if noises exists and its length is greater than 0
  //     if(object.noises.length > 0){
  //         return
  //     } else {
  //         return 'there are no noises';
  //     }

  return object.noises === null ||
    object.noises === undefined ||
    object.noises.length <= 0
    ? "there are no noises"
    : object.noises.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
  //convert string into set...so we can use sets .has property

  //     let wordSet = new Set(string.split(" "));

  //     console.log(wordSet);
  //     console.log(wordSet.has(word))
  // return wordSet.has(word);

  // let filteredArray = string.split(' ').filter(el => el === word);
  //  console.log(filteredArray);

  //  return filteredArray.length === 1 ? true : false;
  return string.split(" ").includes(word);
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
  console.log(name, array);
  //convert array to object
  //assign nonFriends variable to empty array
  //iterate through object
  //if current element.name does not equal name and current element .name is not included in friends array
  //push into non frineds array
  //get/create friends array
  //filter array against given name to get given name obj
  let user = array.filter((el) => el.name === name);
  console.log(user);
  //assign friends array to filtered array
  let friends = user[0].friends;
  console.log(friends);
  //create not friends array
  let notFriends = [];
  //iterate through given array
  for (let el of array) {
    //if current element is not the name passed as an arguement does not exist in friends array
    if (!friends.includes(el.name) && el.name !== name) {
      console.log(el.name, "we need to add this name to a not friends array");
      //push into notFriends array
      notFriends.push(el.name);
    }
  }
  console.log(notFriends, "notFriends");
  //return notFriends array
  return notFriends;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
  // console.log(object, 'object before')
  // console.log(object.hasOwnProperty(key))
  if (object.hasOwnProperty(key)) {
    // console.log(object[key], `this is the property you need to update with ${value}`)
    object[key] = value;
  } else {
    object[key] = value;
  }
  // console.log(object, 'object after')
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
  // console.log(object, array)
  for (let el of array) {
    if (object.hasOwnProperty(el)) {
      delete object[el];
    }
  }
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
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
