// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
 // i : a string
 // o : number - the length of input string
 // c : n/a
 // e : input is not a string?
   return string.length;

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
// i : string
// o : new string forced to lowercase
// c : n/a
// e : will input always be a string?
//use toLowercase method to return a string that has been lower cased
return string.toLowerCase();
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
// i : string
// o : new string converted to uppercase
// c : n/a
// e : will input always be a string?
//use toUppercase method to return a string that has been lower cased
return string.toUpperCase();


    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
// i : string
// o : new string converted to dash case
// c : n/a
// e : will input always be a string?
//use replaceAll string method to return a string that has been dash cased
//return string.toLowerCase().split(' ').join('-');
 return string.toLowerCase().replaceAll(" ", "-");

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
// i : 2 parameters, string and char
// o : boolean, conditional on whether or not given string starts with given char
// c : n/a
// e : case sensitivity

//get string at index 0
//compare it to char
//return true based on comparison of char and string at index 0

return string[0].toLowerCase() === char.toLowerCase();

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
// i : 2 parameters, string and char
// o : boolean, conditional on whether or not given string ends with given char
// c : n/a
// e : case sensitivity?

//get string last index
//compare it to char
//return true based on comparison of char and string at index 0

return string[string.length - 1].toLowerCase() === char.toLowerCase();



    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// i : 2 parameters, 2 strings
// o : the result of concatinating both strings together
// c : n/a
// e : will both inputs always be a string?

//concatinate strings using string concate method
return stringOne.concat('', stringTwo);
    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
// i : multiple, possibly a lot of strings
// o : the result of joining all strings together
// c : n/a
// e : will all inputs always be a string?
    // YOUR CODE BELOW HERE //
    var args = Array.from(arguments);
    //use array method join to return all elements of arg array as one string
    return args.join('');

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */
function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// i : 2 parameters, 2 strings
// o : the string that has a longer length
// c : n/a
// e : will both inputs always be a string, what if equal length?

//use length method to compare length of strings
return (stringOne.length > stringTwo.length ? stringOne : stringTwo);

    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
// i : 2 parameters, 2 strings
// o : return 1 if stringOne is higher in alphabetical order than string 2, return 0 if equal alphabetical order
// c : n/a
// e : will both inputs always be a string?

//add strings to array to use sort method
let arr = [stringOne, stringTwo];

//user ternary operator to deal with conditionals
return arr.sort((a, b) => {
    return a === b ? 0 : a < b ? -1 : 1;
})


    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //




    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
