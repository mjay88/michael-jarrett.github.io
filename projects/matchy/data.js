/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 2. [ ] Create a variable named `animal` and assign it to an empty object. 
var animal = {};
//  3. [ ] Using **dot notation** give `animal` a **property** named `species` with a value of any animal species.
animal.species = 'ocelot';
//  4. [ ] Using **bracket notation** give `animal` a **property** called `name` with a value of your animal`s name.
animal['name'] = 'Benny';
//  5. [ ] Using either notation, give `animal` a **property** called `noises` with a value of empty array.
animal.noises = [];
//  6. [ ] Print your `animal` Object to the console by adding, `console.log(animal);`,
console.log(animal)
//  7. [ ] Save your work (command-s || ctrl-s), switch back to the browser tab with your website running,


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1. [ ] Create a variable named `noises` and assign it to an empty array.
var noises = [];
//  2. [ ] Using **bracket notation** give `noises` it's first element. A string representing a sound your animal might make.
noises[0] = 'caterwauling';
//  3. [ ] Using an array function add another noise to the end of `noises`.
noises.push('purr purr');
//  4. [ ] Go to the array documentation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array?redirectlocale=en-US
//  5. [ ] Look through the functions until you find the one that will place an element at the begining of the array.
//  6. [ ] Add an element to `noises` using this function.
noises.unshift('yeowl');
//  7. [ ] Using **bracket syntax** again, add another element to the end of `noises`. Make sure that the way you do this step would work no matter how many elements `noises` had. In other words, don't hard code the position of the new element.
noises[noises.length] = 'hiss';
//  8. [ ] `console.log` the length of `noises`
console.log(noises.length, 'length');
//  9. [ ] `console.log` the last element in `noises` again without hard coding the index.
console.log(noises[noises.length - 1], 'last element');
//  10. [ ] `console.log` the whole array.
console.log(noises);
//  11. [ ] Does it look right?


//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1. [ ] Using **bracket syntax**, assign the `noises` property on `animal` to our new `noises` array.
animal.noises = noises;
console.log(animal, 'animal');
// 2. [ ] Using any syntax add another noise to the `noises` property on `animal`.
animal.noises[4] = 'reph';
// 3. [ ] `console.log` `animal`.
console.log(animal, 'animal');
// 4. [ ] Does it look right?



/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 * bracket, dot notation, for...in loop
 * 2. What are the different ways of accessing elements on arrays?
 * bracket, dot, length property, for, for...of
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1. [ ] Create a variable named `animals` and assign it to an empty array.
var animals = [];
//  2. [ ] `push` our `animal` that we created to `animals`. You should now see your first animal appear on your `index.html` page!
animals.push(animal);
//  3. [ ] `console.log` `animals`. What does it look like?
console.log(animals, 'animals');
//  4. [ ] Create a variable called `duck` and assign it to the data:
//   - `{ species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] }`
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };
//  5. [ ] `push` `duck` to `animals`
animals.push(duck);
//  6. [ ] `console.log` `animals`. What does it look like?
//  7. [ ] Create two more animal objects each with a species, a name, and at least two sounds sounds and add each one of them to `animals.
var reindeer = { species: 'reindeer', name: 'Veronica', noises: ['bellow', 'snort', 'whiney', 'clomp'] };

var chicken = { species: 'Jersey Giant Chicken', name: 'Ryain', noises: ['chirp', 'cluck-cluck', 'cock-a-doodle-do', 'bock-bock'] };

animals.push(reindeer, chicken);
//  8. [ ] `console.log` `animals`, and, `console.log` the length of `animals`. Is everything looking right?


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// 1. [ ] Choose a data structure for this **list** of friends.
//an array
// 2. [ ] Write a comment in your code that explains why you chose this data structure.
//an array is more appropriate for a list than an object, an array can easily iterate, search, find the how many elements in it, keeps everything in a consecutive order
// 3. [ ] Create a variable called `friends` and assign it to the data structure that you chose.
var friends = [];
// 4. [ ] Take a look at the documentation for `Math.random` here: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// 5. [ ] Write a function called `getRandom` that takes our `animals` array and returns  a random `index` of the input array, using `Math.random`
//math.floor rounds a floating number down to nearest integer
//math.random returns a random number based on a given range
function getRandom(arr){
  //create a variable that will represent a random index in our array
  //assign the range to the length of our array so it always returns an index that exists
  let random =  Math.floor(Math.random() * arr.length);

  return random;
}
let randomAnimal = animals[getRandom(animals)];
console.log(randomAnimal, 'randomAnimal')
// 6. [ ] Using a random index from this function that you just created, get a random animal and add its `name` to `friends`.
friends.push(randomAnimal.name);
// 7. [ ] `console.log` `friends`.
console.log(friends, 'friends line 129')
// 8. [ ] Using **bracket notation**, add the `friends` list as a **property** also named `friends` on one of the animals in the `animals` array
// animals[Math.floor(Math.random() * animals.length - 1)].friends = friends;
 animals[Math.floor(Math.random() * animals.length)].friends = friends;

// 9. [ ] `console.log` your work.
console.log(animals, 'line 133')


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}