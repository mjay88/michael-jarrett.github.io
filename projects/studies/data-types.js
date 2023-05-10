/**
 * 
 * Data Types : All values in JavaScript can be classified by there type, for example, text or a number, except in JavaScript all variables that are text are classified as strings. Here are all the basic types of data in JavaScript, plus some extra considerations.  
 * 
 * 
 * 
 * 
 * Clear explanation for each concept
 * 
 *
 * Working code exampls for each concept
 * 
 * 
 *Commmet of what each code example should log/return 
 * 
 *
 * 
 * 
 */


 //1. Number 
 //A number type is pretty straight forward. A number type can be either; an interger, ie a whole number, or a decimal or floating number. Just like basic arithmetic, we can preform mathematical operations on numbers, and numbers can also be negative.

 let sum = 1 + 1;
 console.log(sum) //Expected result : 2
 let product = 2 * 8;
 console.log(product) //Expected result : 16
 let quotient = 15 / 2;
 console.log(quotient) //Expected result : 7.5
 let difference = 5 - 3;
 console.log(difference) //Expected result : 2


 //2. String
//All text in JavaScript is classified as the string type. A string is only valid if it is surrounded by quotes.

let text = "Jello World"; //double quotes
let text2 = 'Jello World'; //single qoutes
let moreText = `Welcome to Jello World`; // the little back ticks at the top right of the key board

//The back ticks have special significance because we can easily include other variables inside of a string using specific syntax

let string = "Jello World";
let salutation = `Hello, and Welcome to ${string}`
console.log(salutation); //Expected Output : Hello, and Welcome to Jello World
//When using the back ticks ` `, anything inside of ${ }, we can put mathematical operations inside too, will be read or executed and become a part of the string. This is known as string interpolation and is quite handy. 

 //3. Boolean
 //The boolean type, also known as the logical type, is either one of two values: true or false. You can think of this in terms of yes or no conditions. For example : Is it raining? The answer will be either true or false. 

 let validEmail = false;
 let doesUserExist = true;

 //In JavaScript we can have code run or not run based on the value of these booleans. We will learn more about booleans later.

 //4. Array
 //An array in JavaScript is an ordered collection or list. The ordered part is important.

 //We can declare a variable as an array by creating a new array or with the array literal syntax

 

 let arr1 = new Array()
 let arr2 = [];

 //Things inside of an array are ordered by there index, starting with 0; 

 let animalsArray = ['🐑', '🐕', '🐖', '🐘', '🐦'];
//                    0     1   2    3   4

//We can select a single element from an array by using 'bracket notation'
let sheep = animalsArray[0]; //Expect result : '🐑'

//We can also use bracket notation to replace animals and add new ones to our array
animalsArray[0] = '🐐'; //Expect result : ['🐐', '🐕', '🐖', '🐘', '🐦']
animalsArray[5] = '🐫';  //Expect result : ['🐐', '🐕', '🐖', '🐘', '🐦', '🐫']

//Array's in JavaScript have built in methods, or functions specific to arrays, to help us do things with them

//the .length method counts the elements in our array
console.log(animalsArray.length) //Expected result : 6;
// we can also us the .length array and special syntax to get the last element of the array
console.log(animalsArray[animalsArray.length - 1]) //Expected result : '🐫'
//or the shorter syntax 'at', 
console.log(animalsArray.at(-1))  //Expected result: '🐫'

//More array methods
//adding and removing items to the beginning and end of our arrays is an extremely common task in when programming with JavaScript, as such, array's have built in methods to help us with this
animalsArray = ['🐐', '🐕', '🐖', '🐘', '🐦', '🐫'];
//push adds an element to the end of an array
animalsArray.push('👻'); //Expected result :  ['🐐', '🐕', '🐖', '🐘', '🐦', '🐫', '👻']
//pop removes an element from the end of our array and returns us that element
animalsArray.pop(); //Expected result : '👻' and our animalsArray now looks like this : ['🐐', '🐕', '🐖', '🐘', '🐦', '🐫' ]

//the shift method removes an item from the beginning of an array
animalsArray.shift(); //Expected result : ['🐕', '🐖', '🐘', '🐦', '🐫'];
//and the unshift method adds and item to the beginning of an array
animalsArray.unshift('🐐'); //Expect result : ['🐐', '🐕', '🐖', '🐘', '🐦', '🐫']



 //5. Object


 //6. Function



 //7. undefined 
 //The undefined type is kind of special. If a variable is assigned to undefined, it doesn't mean the value of that variable is nothing, rather it means "no value has been assigned to this variable". 

 let myName;
 console.log(myName) //Expected output : undefined
 
 //Undefined variables typically exist due to that variable only being declared and not assigned a value, or due to something unexpected happening in your code, you can specifically assign a variable to undefined, though this is kind of redundant and there are better options for assigning a variable for something with no value. 

 let myCatsAge = undefined;
 console.log(myCatsAge) // Expected output : undefined


 //8. null
 //Null is a more appropriate type to use than undefined when assigning a variable to a value indicative of nothing. The null value type, just like the undefined value type, is also an special idiomatic type. 

 let size = null;
 console.log(size); //Expected output : null

 //Unlike undefined, which is like a label that has been created but not put on anything, a variable assigned null has a value of nothing, void of value, or empty. (This is best read in a Werner Herzog voice). 



//9. NaN


//10. Infinity and -Infinity


//11.Primitive vs Simple data types


//12. Copy by value vs copy by reference.