// Given a string print, the number of times each character appears

let str= "masai";
// m 1
// a 2
// s 1
// i 1

let object= {};

for(let i=0; i<str.length;i++){

  if(object[str[i]]== undefined){
    object[str[i]]=1 // adding element into object;
  }
  else{
    object[str[i]]++; // updating the values.
  }
  
}

console.log(object);