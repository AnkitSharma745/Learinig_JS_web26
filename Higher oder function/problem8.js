 // javascript built few inbuilt function which are higher order function 

let arr= [1,2,3,4,5] // [1,4,9,16,25];
// 1. map

let result= arr.map(function (a){
   return (a**2);
})

console.log(result);

// map will only works for array;

//map runs like a loop and it takes another function as a argument, so it called as an HOF.

// when we return something in map, it will give us array.
 