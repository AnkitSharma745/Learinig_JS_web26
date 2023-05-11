let arr= ["luffy", "goku", "luffy", "zoro", "sanji"];

// ["luffy", "luffy"]---> output.



let storage = arr.filter( function (a){
  if(a== "luffy"){
    return a;
  }
})

// console.log(storage);



// the count of element in this array which are luffy

let count=0
arr.forEach((a)=>{
  if(a== "luffy"){
    count++;
  }
})

console.log(count);
  