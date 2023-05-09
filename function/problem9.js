// check if a number is prime or not using function.


// a number divisible by 1 and itself ---> prime number or a number which has two factor it is called prime number.


// 1. write the logic .
//2. convert it into function.
//3. call the function.
//4 . check with different number.


//1. logic.
// // let num= 4;

// let count=0;
// for(let i=1; i<=num; i++){
//   if(num%i==0){
//     count++;
//   }
// }
// if(count==2){
//   console.log("prime number");
// }
// else{
//   console.log("not a prime number");
// }


//2. function

function check_prime(num){
  
  let count=0;
for(let i=1; i<=num; i++){
  if(num%i==0){
    count++;
  }
}
if(count==2){
  console.log("prime number");
}
else{
  console.log("not a prime number");
}
}

check_prime(5);
check_prime(6);