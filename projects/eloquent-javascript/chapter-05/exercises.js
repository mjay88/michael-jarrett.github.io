// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function flatten(array) {

  let flattenedArray = array.reduce((acc, el) => {
    //concat current index(which is an array) on to seed array
    return acc.concat(el);
    //set acc as empty array,
  }, []);
  return flattenedArray;
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function loop(value, testFunc, updateFunc, bodyFunc) {


// console.log(value, "value****************************************")
//each iteration, it furst uns the test function on the current loop value and stops if that returns false

for(let i = value; testFunc(i); i = updateFunc(i)){
  bodyFunc(i)
}

}

// console.log(value)
// if(Array.isArray(value)){
//  for(let arrayValue = 0; arrayValue < value.length; arrayValue++){
//   if(testFunc(value[arrayValue]) === false){
//     break;
//   }

//  }

//  //then it calls the body function, giving it the current value
// bodyFunc(value);
  
// //finally, it clas the update funcitn to  create a new value and starts from the beginning
//  return(updateFunc(value - 1))


// }

//   for(let i = 0; i < value.length; i++){
//     console.log(value[i], 'fuck this question')
// //run the testFunc on current loop value and stop if returns false
//   if(testFunc(value[i]) === false){
//     break;
//   }
//    //then it calls the body function, giving it the current value
// bodyFunc(value);
  
// //finally, it clas the update funcitn to  create a new value and starts from the beginning
//  return updateFunc(value - 1)

// }
//   //then it calls the body function, giving it the current value
// bodyFunc(value);
  
// //finally, it clas the update funcitn to  create a new value and starts from the beginning
//  return updateFunc(value - 1)

//  console.log(value)



  


// }

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function every(array, test) {

//if empty array, return true?
if(array.length === 0) return true;
//iterate through eachc element
for(let el of array){
  //if if statement resolves to false ever
  if(!test(el)){
    //return false
    return false
  }
}
//return true if we make it through entire array without returning false
return true;
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

function dominantDirection(code) {


  let scripts = textScripts(code);
  console.log(scripts);

  function textScripts(text) {
    let scripts = countBy(text, char => {
      let script = characterScript(char.codePointAt(0));
      return script ? script.name : "none";
    }).filter(({name}) => name != "none");
  
    let total = scripts.reduce((n, {count}) => n + count, 0);
    if (total == 0) return "No scripts found";
  
    return scripts.map(({name, count}) => {
      return `${Math.round(count * 100 / total)}% ${name}`;
    }).join(", ");
  }



  function characterScript(code) {
    for (let script of SCRIPTS) {
      if (script.ranges.some(([from, to]) => {
        return code >= from && code < to;
      })) {
        return script;
      }
    }
    return null;
  }

  function countBy(items, groupName) {
    let counts = [];
    for (let item of items) {
      let name = groupName(item);
      let known = counts.findIndex(c => c.name == name);
      if (known == -1) {
        counts.push({name, count: 1});
      } else {
        counts[known].count++;
      }
    }
    return counts;
  }
  
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
}
