/**
 * Operators
 * 
 * In JavaScript we are often comparing two things to each other. To do this we us symbols known as operators.
 * 
 * We can preform mathematical operations similar to basic arithmetic using mathematical operators.
 * 
 * There are also logical operators which we can us on numbers and values that aren't numbers.  
 * 
 * An 'operand' is what we use operators on. In the code 5 + 4, 5 and 4 are the operands.
 * 
 * A unary operators is an operator used with a single operand
 * We have already seen the assignment operator '-', which is unary operator
 * 
 * let x = 22
 * Below '-' is a unary operator, it is only used on one operand. 
 * let num = 10;
 * let num = -num
 * 
 * A binary operator is an operator that uses two operands
 * console.log(5 * 7) Expected Output : 35
 * Here '+' is considered an binary operator. The '+' operand also works on strings, as seen in our data types file. Some operators can function as unary and binary operators. For instance, the '+' operand is also used to convert numbers to strings
 *let num = "10"
 *num = +num
 * console.log(typeof num) // Expected Output : 'number'
 * 
 */

//Basic Math Operators
//In JavaScript we can preform basic mathematical computations between two variables using math operators, similar to basic arithmetic back in elementry school. Some of these may look familiar:
//Addition : +
//Subtraction : -
//Division : /
//Multiplication : *
//Remainder :  %. The remainder operator, sometimes called the modulo operator, gives us the remainder of attempting to preform division on two integers. It's whats left over if our division didn't result in a nice whole number, if it did, then the result is 0
console.log(5 % 2) //Expected Output : 1, 2 goes into 5 twice with one left over
console.log(8 % 4) //Expected Output : 0, 4 goes into 8 twice with nothing left over

//Exponentiation : ** The exponentiation operator raises the first operand to the power of the second operand. It may look more familiar when written with the super script
//2 ** 2 is the same as 2²
console.log(2 ** 2) //Expected Ouput : 4
//We can also use the exponetiation operator to get the square root of something
console.log(4 ** (1/2)) //Expected output : 2 


//Comparison Operators
//Outside of basic math operators, we have comparison operators, which may also look familair from early arithmatic classes. Comparison Operators return a Boolean
//Greater than/less than : >, <
console.log(9 > 5) //Expected Output : true
console.log(10 < 3) //Expected Output : false

//Greater than or equal/less than or equal ; >=, <=
console.log(3 <= 3) //Expected Output : true
console.log(4 >= 9) //Expected Output : false

//Equals : === (Technically, '==' is also used to compare equality but it is not as definite as the tripe '===' and may result in unexpected results, so it is best to just always use '===')
console.log(9 === 9) //Expect Output : true;
console.log(9 === 10) //Expect Output : false;

//Not equals : !=, the logical opposite of the equality operator
console.log(12 != 3)//Expected output : true;
console.log(4 != 2)//Expected output : false;

//Ternary operator 
//The 'ternary' operator, as known as the 'conditional' or 'question mark' operator, lets us execute the logic of and if/else statement in a much shorter syntax
//Standard If/else statement
let age = 21;

if(age >= 21){
    console.log("You may enter the bar")
} else {
    console.log("You are to young to enter")
} 

//shortened with the ternary syntax
  age >= 21 ?  console.log("You may enter the bar") : console.log("You are to young to enter") // If the condition before the question mark doesn't resolve to true, the second condition will be executed.

  



//There are several operators that provide us with 'short-cuts', or a shortened syntax when it comes to basic math operators

let number = 3;
number += 6 //is the same as number = number + 6;

let product = 8;
product *= 9// is the same as product = product * 9;

//Increasing a number and decreasing a number very common in JavaScript, as such there are operators to help shorten this syntax.
//The '++' or increment operator increases by one
let count = 10;
count++ //is the same as count = count + 1
console.log(count)// Expected Output : 11
//The '--' or decrement operator is the opposite of the increment operator
count-- //is the same as count = count -1
console.log(count)//Expected Output : 10

//Logical Operators
//JavaScripts' logical operators help us extend the functionality of conditional statements, which are covered in a seperate file. Just like comparison operators, they resolve to a boolean value.
// The "||" - "Or" operator, can be used in a comparision in the same way 'either' is used in english
let color = 'green';

if(color === 'green' || color === "red"){
    console.log('Christmas colors');
}
//The above if statement can be read as "If color equals green OR color equal red, log 'Christmas colors' to the console."

//The "&&" - "AND" operator return true if both operands or statements resolve to true, and false if otherwise
let condition1 = true;
let condition2 = true;
if(condition1 && condition2){
    console.log('Both conditions are true')
}
//The above if statement can be read as "If condition1 and condition2 are true, log, 'Both conditions are true' to the console.

//"!" or "NOT" operator returns the opposite of a values boolean evaluation. All values in JavaScript can be resolved to a boolean, writing an exclimation point before a value will reverse its boolean evaluation

console.log(!true) //Expected output : false
console.log(!false) //Expected output : false









