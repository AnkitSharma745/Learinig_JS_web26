// write a function to check if a number is divisible by 2 or not.


//   let num= 5;

// if(num%2==0){
//   console.log("divisible.");
// }
// else{
//   console.log("not divisible");
// }


function divisible(number){
  
  if(number%2==0){
    console.log("divisible");
  }
  else{
    console.log("not divisible");
  }
}

divisible(5); //test case 1;
divisible(6); // test case 2
divisible(7); // test case 3


// if a number is divisible by 3 and 5 --> divisilbe
// in all other cases --> not divisible