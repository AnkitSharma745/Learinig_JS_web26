// there is an array= [1,2,3,4,5];
// you need to write a function and get the output of square of this array
// [1,4,9,16,25] --> output.


let arr= [1,2,3,4,5];

function power(arr, power){
  let output= [];
  for(let i=0;i<arr.length;i++){
    output.push(arr[i] ** power);
  }
  console.log(output);
}

power(arr,3);