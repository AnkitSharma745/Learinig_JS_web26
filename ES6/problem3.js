// logical operators

// and or not 

// && || !

//&& ---> it will be true when all the conditions are true;
// the complier will check for first false value and return it, if it does not find any false value it will return the last true value;


// || --> it will be true when atleast one condition is true;
// the compiler will check the first true value and return it, if it does not find any true value it will return the last false value.



// console.log(0 || 5 || 4)

// console.log(null || 0);
// console.log(null || -1 || 1);



// console.log(1 && 0);
// console.log(1 && -1 && "hello");


// console.log( null || -1 && 1);

if(0 || -1 && "hello" || 1){
  console.log("hi");
}
