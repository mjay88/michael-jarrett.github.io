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

 //We can declare a variable as an array using the array constructor syntax or with the array literal syntax

 let arr1 = new Array()
 let arr2 = [];

 //Things inside of an array are ordered by there index, starting with 0. An element in an array can be anything.

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
animalsArray.unshift('🐐'); //Expected result : ['🐐', '🐕', '🐖', '🐘', '🐦', '🐫']

//We will learn about many more array methods later on. But for now just try to remember that they are ordered/indexed lists of data.

 //5. Object
 //In JavaScript, objects are fancier arrays used to store data with a reference key, instead of a numbered index. Objects can hold any type of data. They usually are chosen over arrays for storing more complex data, and when having things in consecutive order is of less importance.

 //We can declare an object in JavaScript using object constructor syntax or assigning a variable to an object literal

 let user1 = new Object();
 let user2 = {};

 //we add data to our object using a -key:value- or -property:value- structure. For the sake of this document, keys and properties are interchangable.

 let user = {
    name : 'Maria',
    occupation : 'nurse',
    DOB : '11/28/85',
    phone : '555.555.5555'
 }

 //Above we created an object that represents a user. The 'keys' are on the left side of the colon. They do not have to be denoted in the JavaScript string syntax, because JavaScript will automatically convert them to strings for us. The 'values' are on the right side of the colon. These do need to be created using proper string syntax, but values can pretty much be anything : strings, numbers, functions, arrays, objects, booleans, ect...

 //Notice that we are not using the numbered index structure that arrays use. Because of this, we can add keys to our object without having to worry were we are going to put it.
 
 user['lastLogin'] = "05/15/2023"; 

//Now our object should look like this : 
 
 let user = {
    name : 'Maria',
    occupation : 'nurse',
    DOB : '11/28/85',
    phone : '555.555.5555',
    lastLogin : "05/15/2023",
 }

 //We added the 'lastLogin' key using bracket notation. We can also add keys using dot notation

 user.employed = true; //creates a key with a boolean value, like below

 let user = {
    name : 'Maria',
    occupation : 'nurse',
    DOB : '11/28/85',
    phone : '555.555.5555',
    lastLogin : "05/15/2023",
    employed : true,
 }

 //We can use either syntax to access keys and thus their values

 console.log(user[occupation]) //Expected result : 'nurse'
 console.log(user.name) //Expected result : 'Maria'

 //This allows us a specific advantage over arrays when working with objects, in that all we need to know is the name of the key to get the value we may be looking for, with an array, we would have to know the exact index that it is at, or, we would have to search the entire array starting at the beginning to find it. With an object, if we know the keys name, we can look up the value instantly

 if(user.employed){ //if the key does in fact exist, we can tell instantly
    console.log('That key exists')
 } else { //if it doesn't exist we will also know instantly
    console.log('That key does not exist')
 }
 
 //Like the array's 'at' operator, objects also have and 'in' operator, which is another way of checking if a key exists in an object

 console.log( DOB in user) //Expected output : true

 //This will return false if the key doesn't exist

 console.log( COO in user) //Expected output : false

 //We will learn more about objects later, but for now just remember that they are data structures that use a key/value relationship for ordering its data.




 //6. Function
 //Functions are how we repeat code in JavaScript. We saw a few functions in our section on arrays, like .length and shift() and pop(). With a function we can encapsulate a bit of code so that we can use it where ever we need to in our program.

 //We create function by using a 'function declaration'

 function addTheseNumbers(number1, number2){ //
    return number1 + number2;
 }

//In a function declaration, the keyword 'function' is followed by the name of our function. Then in between the () our are 'parameters', seperated by a comma. Parameters are place holders for real data, and we can pass as many as we need as input for our function. After that between the two {}, or curly brackets, is our 'function body'. Our function body is where we describe what we are going to be doing with our data. Inside of our {} is also the return keyword. The return keyword guarantees that our function will spit our a value once we have done something with our input parameters. Sometimes we don't need our function to return anything at all, but for this example we do. 

//Now that we have declared a function, we can use it by calling it and passing it some really data

console.log(addTheseNumbers(6, 5)) //Expected Output : 11





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
//In JavaScript, NaN would fall under the number type category but as a special numeric case. It is an error built into a type. It is typically the result of something going wrong when trying to preform a mathematical operation. 
console.log("forty-three" / 5) //Expected result : NaN, you can't divide a string value by a number type. 

//Any operation preformed on NaN will return NaN
console.log(NaN + 99) //Expected result : NaN
console.log(3 * NaN) //Expected result : NaN

//This type exists to not stop all of our code if we've made a mistake. Instead of having the equavilant of a wrench thrown into our programs gears, it will all run still but with the output of NaN

//10. Infinity and -Infinity
//Infinity and -Infinity also exist in the number category but are a special type within the category. 

//Infinity represents the mathematical Infinity or ∞. It is greater than any number. 
//We get it as an output when we divide something by zero
console.log(2 / 0) //Expected output : Infinity

//Infinity is sometimes used to help define a variable on the first iteration of a loop :


//-Infinity is essentially the same just going in the opposite direction away from 0;


//11.Primitive vs Simple data types


//12. Copy by value vs copy by reference.