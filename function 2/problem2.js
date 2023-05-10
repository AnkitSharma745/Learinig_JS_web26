// write a function to check if it is odd or not.

// return statement inside function.

// odd number---> return true.
// even number----> return false.


function odd(number){
  if(number%2==1){
    return true;
  }
  else{
    return false;
  }
}


let array= [1,1,2,2,3,3]; 

let odd1= 0;
let even=0;
for(let i=0; i<array.length; i++){

  let ans= odd(array[i]);
  if(ans== true){
   odd1= odd1+ array[i]
  }
  else{
   even= even+ array[i]
  }
}

console.log(odd1,even);













// let arr= [1,2,3,4,5];

//   let count=0;
// for(let i=0; i<arr.length;i++){

//  let storage=  odd(arr[i]);

//   if(storage== true){
//     count++;
//   }
  
// }

// console.log(count);

