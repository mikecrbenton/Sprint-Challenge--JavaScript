// ==== Closures ==== 
console.log("==============CLOSURES===================");
//========================================================================
/* Task 1: Study the code below and explain in your own words why 
   nestedFunction() can access the variable internal. */
//========================================================================

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();

// Explanation: 

/* nestedFunction() can access "internal" because they are both in the 
   same scope or block.  myFunction() is like a barrier or a wall, but both
   are inside that wall, so they are both accessible */




//========================================================================
/* Task 2: Counter */

/* Create a function called `sumation` that accepts a parameter and 
   uses a counter to return the summation of that number. For example, 
   `summation(4)` should return 10 because 1+2+3+4 is 10. */  
//========================================================================


function summation(){
   //CLOSURE VARIABLE
   let counter = 0;

   return function( number ){
      for(let i=1 ; i <= number ; i++ ){
         counter += i;
      }
      return counter;
   }
}

let myReturnedFunction = summation();

console.log("CLOSURE FUNCTION: ")
console.log( myReturnedFunction(4) );