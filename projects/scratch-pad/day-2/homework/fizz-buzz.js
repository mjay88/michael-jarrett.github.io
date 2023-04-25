// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
//i : nothing
//o : prints the numbers 1 - 100
//c : if number is a multiple of 3, print fizz, if the number is a multiple of 5 print buzz, for numbers that are multiples of 3 and 5 print fizz and buzz
//e : how to detemine whether or not a number is multiple of 3 or 5, should it print our fizz, buzz, and fizzbuzz for applicable numbers of just fizzbuzz?
    // YOUR CODE GOES BELOW HERE //
//create a while loop or for loop, fuck it do both, that can print 1 through 100
for(let i = 1; i < 101; i++){
//if a number is a multiple of three and not a mutlitple of 3 and 5, log Fizz
// if(i % 3 === 0 && !(i % 5 === 0 && i % 3 === 0)){
//     console.log("Fizz")
// }
// //if a number is a multiple of five, and not a multiple of 3 and 5, print "Buzz"
//  else if(i % 5 === 0 && !(i % 5 === 0 && i % 3 === 0)){
//     console.log("Buzz")
// }
// //if a number is a multiple of three and five, print "FizzBuzz"
//  else if(i % 5 === 0 && i % 3 === 0){
//     console.log("FizzBuzz")
// //if it is neither, just print the number
// } else {
//     console.log(i);
// } 

//fucked up ternary operator way lol
i % 3 === 0 && !(i % 5 === 0 && i % 3 === 0) ? console.log("Fizz") : i % 5 === 0 && !(i % 5 === 0 && i % 3 === 0) ? console.log("Buzz") : i % 5 === 0 && i % 3 === 0 ? console.log("FizzBuzz") : console.log(i);
}



    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}