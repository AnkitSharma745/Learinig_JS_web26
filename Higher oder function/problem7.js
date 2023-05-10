// // create two functions, pass one function into another function as an argument.

// 1. function should return a value.
// 2. function should use that value and print it by mul with 2;


// 1. 3; ---> return

// 2 --> 3*2 --> 6; (second function has the first function inside it.)


function print(number){
  return number;
};



function print2(x){
  let a= x(3);
  console.log(a*2);
}

print2(print);