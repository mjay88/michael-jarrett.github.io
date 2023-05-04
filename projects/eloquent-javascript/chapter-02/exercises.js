////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(input) {
  //create a string variable
  let string = "";
  //create a for loop that starts at 0 and ends at input passed as arguement
  for (let i = 0; i < input; i++) {
    //for each iteration, add another # to our string variable
    string += "#";
    console.log(string);
    //console.log string each time
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

// When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
//lets do this with a switch statement this time!
function fizzBuzz() {
  //create variable i initialized at 0
  // let i = 1;
  //create a for loop that starts at i and ends at 100
  // for(i; i < 101; i++){
  //inside the for loop make our switch statement
  //   switch(i){
  //   //if i is divisible by 3 console.log "Fizz"
  //     case i % 3 === 0 :
  //     console.log("Fizz")
  //     break;
  //   //if i is divisible by 5 console.log "Buzz"
  //     case i % 5 === 0 :
  //     console.log("Buzz")
  //     break;
  //   //if i is divisivle by 3 and 5 console.log("FizzBizz")
  //     case i % 3 === 0 && i % 5 === 0 :
  //     console.log("FizzBuzz")
  //   //default case will just print i

  //     default :
  //     console.log(i)

  //   }
  // }

  for (let i = 1; i < 16; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////////////////////
// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.
function drawChessboard(input) {
  let pointer1 = 0;
  let pointer2 = "";
  for (let x = 0; x < input; x++) {

    for (let y = 0; y < input - 1; y++) {
     pointer1++;
     
     console.log(pointer1);
     console.log(pointer2);

     if(pointer1 > 6){
      pointer1 = 0;
      pointer2 += "\n"
     }else {
      pointer2 += " #";
     }

    }
  }

  //outer loop handles the lines
}
////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
