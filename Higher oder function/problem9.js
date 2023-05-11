// 2. filter.

let arr= [1,2,3,4,5,6] // [2,4,6];

let result= arr.filter(function (b){
  if(b%2==0){
    return b;
  }
})

console.log(result);


// 1. filter is also used only for array

//2. filter work same like loops
//3. but when we try to return it with a condition it will return us a new array.