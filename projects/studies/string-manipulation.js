/**
 * String malipulation
 * 
 * Dealing with text is a very common task in JavaScript, so there are many built in methods to help make this easier for us.
 * 
 * 
 *  
 * 
 * 
 * 
 */

//Strings are iterable
//We go over loops in another file, but looping through or having to iterate through strings is very common. We can write a regular for...loop, but a for...of loop also loops over each character in a string. 

for(let character of "string"){
    console.log(character) //Expected Result : prints each letter on a seperate line in our console.
}

//Using this iterable concept, you may expect that strings have indexes, just like arrays. We can use bracket notation to get specific indexes of our string. Just like arrays, strings are zero indexed, meaning that the first index of a string is index 0 
let alphabet = "abcdefghijklmnopqrstuvwxyz"
console.log(alphabet[0]) //Expected output : "a"
console.log(alphabet[25]) //Expected output : "z"


//JavaScript has many built in methods that allow us to forgo writing the loop all together.

//string.indexOf iterates through a string looking for the specified index of a given target parameter, and returns the first index where it finds that target, or -1 if not found
let longWord = 'ultracrepidarianism';
console.log(longWord.indexOf('a')) //Expect output : 4, we find the first occurance of 'a' at index 4 

//string.includes can be used to deterime if a target exists in a string. The result of string.includes is a boolean
let searching = "We are looking for my little brother, have you seen him?"
console.log(searching.includes('looking')) //Expected output true;

//We also have string.startsWith and string.endsWith, which do exactly what they say and also return booleans
let beginning = "alpha";
console.log(beginning.startsWith('a')) //Expected output : true
let end = "omega";
console.log(end.endsWith('a')) //Expected output : true

//If we need to return a portion of a given string, we can use substring or slice
//substring() can take either one or two arguements, and includes the substring defined by the parameters, or the start index to the end of the string if only one arguement is given.
let phrase = "Hello World";
console.log(phrase.substring(0, 5)) //Expected output : "Hello" - note that substring gives us the index before 5
console.log(phrase.substring(6))//Expected output : "Word" - when given only one arguement, it gives us the portion of the string starting at index 6 to the end of the string

//slice() basically does the same thing as substring(), the only confusion maybe being that arrays also have a slice method.

//Speaking of arrays, the .split() method can turn a string into an ordered list of characters or words
let arrayOfWords = "Hello World".split();
console.log(arrayOfWords) //Expected output : ["Hello World"]
//We can pass split a 'seperator' arguement, which will split the string up depending on the arguement
arrayOfWords = "Hello World".split("") //Expected output : ["H", "e", "l", "l", "o", "", "W", "o", "r", "l", "d"]
arrayOfWords = "Hello World".split(" ") //Expected output : ["Hello", "World"];

//We can use the string concatination operand to combine strings
let exclamation = "Hello";
let noun = "World";
let message = exclamation + " " + noun;
console.log(message) //Expected output : "Hello World"

//A better way/more modern way of preforming string concatination is using the string interpolation syntax, that we saw in our data-types file
let string = "Jello World";
let salutation = `Hello, and Welcome to ${string}`
console.log(salutation); //Expected Output : "Hello, and Welcome to Jello World"
//When using the back ticks ` `, anything inside of ${ }, we can put mathematical operations inside too, will be read or executed and become a part of the string. This is known as string interpolation and is quite handy. 

















