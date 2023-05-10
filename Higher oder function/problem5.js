// return statement in a function

//print the number which is divisible by 2;

// 1. function ==> run a loop over this array.
// 2. function --> to check if a number is divisible by 2 or not.
//   if it is divisilbe return true else return false.

let arr= [1,2,3,4,5,6];

let divisible = (number)=>{
  if(number%2==0){
    return true;
  }
  else{
    return false;
  }
}

function print(arr){
  for(let i=0; i<arr.length;i++){
  if(divisible(arr[i]) == true){
    console.log(arr[i]);
  }
} 
}

print(arr);

