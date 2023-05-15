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
 * 
 * let num = 10;
 * let num = -num
 * Here '-' is a unary operator, it is only used on one operand.
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

