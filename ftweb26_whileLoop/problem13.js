// print the sum of all the multiples of 3 from 0-10;

//0, 3,6,9==> 18;


//1. try find the numbers which are multiples of 3;
//2. find the sum of them.

let i=0;
let sum=0;

while(i<=10){
  if(i%3==0){
    // console.log(i);
    sum= sum+i;
  }
  i++;
}
console.log(sum);