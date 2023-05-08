
let arr= [1,2, -70, 3, -30, 4, 5];

// min= -70
//max= 5;

// find the max and min values in this arrayBuffer

let min= +Infinity // It will give us the highest value in javascript.

let max= -Infinity // it will give us the lowest values in javascript.


for(let i=0; i<arr.length;i++){
  if(arr[i]<min){
    min= arr[i];
  }
  if(arr[i]>max){
    max= arr[i];
  }
}
console.log(min, max);