// 3. sort 

let arr= [9443,8,0,600,587,4,3,2,1];

let store= arr.sort(function (a,b){
  // return a-b; //low to high
  return b-a // high to low.
})

console.log(store);


//1. sort is also only for array.

//2. it is used to sort the element from high to low or low to high

//3 the inner function takes to parameter, for sorting.