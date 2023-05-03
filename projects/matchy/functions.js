/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 2. Implement a function declaration called `search` that:

//    - Takes a paramater representing an Array of `animals`.

//    - Takes a paramater representing a String, the name of an animal on which to perform a search.

//    - Looks through the `animals` Array, and returns the animal's Object if an animal with that name exists.

//    - Returns `null` if no animal with that name exists
function search(arr, string) {
  //value to return
  var foundAnimal = null;
  //iterate through arr of animals
  for (let i = 0; i < arr.length; i++) {
    //if current element name equals the string passed as arguement
    console.log(arr[i].name, "all the fucking animals");
    if (arr[i].name === string) {
      console.log(arr[i], "found animal object");
      foundAnimal = arr[i];
    }
  }
  //return that entire element
  console.log(foundAnimal, "line 40");
  return foundAnimal;
}
//  3. Use the search bar at the top of the page to make sure your function works.

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1. Write a function declaration called `replace` with a signature of `replace(animals, name, replacement) { //... } ` that: //     - Takes 3 parameters, an Array of animals, a String representing  the name of an animal on which to perform a search, and an Object that represents the replacement animal.
// - If an animal with that name exists within the `animals` Array, replace it's entire Object with the replacement Object.
//     - Otherwise do nothing.
function replace(animals, name, replacement) {
  //iterate through array of animals
  for (let i = 0; i < animals.length; i++) {
    //if we find an animal with given name property, reassing to the replacement arguement
    if (animals[i].name === name) {
      animals[i] = replacement;
    }
  }
}
//
//   2. Preview the `index.html` page to test it on the website.
//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1. Write a function declaration called `remove` with a signature of `remove(animals, name)` that:
// - Takes 2 parameters, an Array of animals, and a name of an animal on which to perform a search.

function remove(animals, name) {
  //iterate through animals array
  for (let i = 0; i < animals.length; i++) {
    //if an element in the array has the name property we are looking for,
    if (animals[i].name === name) {
      //remove that element, with splice, at given index, remove one item

      animals.splice(i, 1);
    }
  }
}

// - If an animal with that name exists within the `animals` Array, remove it.
// 2. Test that it works on the website.
//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1. Write a function declaration called `add` with a signature of `add(animals, animal) { //... }` that:
//     - Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
//     - Checks that the animal Object has a `name` property with a length > 0.
//     - Checks that the animal Object has a `species` property with a length > 0.
//     - Has a **unique** name, meaning no other animals have that name.
//     - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.
//     - Make sure it works.

//make a function that takes 2 paramaters, animals array and animal object to add to animals array
function add(animals, animal) {
  //check if the animal to add object exists by checking for its name length and its species length
  if (animal.name.length > 0 && animal.species.length > 0) {
    //if the name and species is the appropriate length, iterate through 
    for (let i = 0; i < animals.length; i++) {
      //if an animals name matches the animal we are trying to add, break
      if (animals[i].name === animal.name) {
        //loop ends function returns nothing
        console.log('that user already exists')
        return;
      } 
    }
    //if we make it through the entire array checking if the name matches, that means there are not matches, push animal into animals array
    animals.push(animal);
  }
  
  

}


//  This is called **data validation** and it's extremely important in web development!
/**
 * You did it! You're all done with Matchy!
 */

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  module.exports.search = search || null;
  module.exports.replace = replace || null;
  module.exports.remove = remove || null;
  module.exports.add = add || null;
}
