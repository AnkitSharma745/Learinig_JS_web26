//print the average of even number from 1 to 5 (both included)

//1. find the even number.
//2. calculating the sum of even.
//3. number of even number. (count of even number.)
//4 . calculating the average = sum/count.



let i=1 ;// starting point.
let sum= 0;
let count= 0;
//i<6
while(i<=5){
  
  if(i%2==0){
    // console.log(i);
    sum= sum +i;
    count++;
  }
  i++;
}

console.log(sum/count);