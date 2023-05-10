

// function to reverse a string.

// luffy----> yfful


function reverse(str){

let bag= "";
for(let i= str.length-1; i>=0;i--){
  bag= bag+ str[i]
}
// console.log(bag);
  return bag;

}


let arr= ["luffy","mom", "dad", "zoro"];

// for(let i=0; i<arr.length;i++){

//   let answer= reverse(arr[i]);

//   if(answer== arr[i]){
//     console.log("it is palindromic");
//   }
//   else{
//     console.log("it is not palindromic");
//   }
// }
let output= [];
for(let i=0;i<arr.length;i++){
  let answer= reverse(arr[i]);
  output.push(answer);
}
console.log(output);

































































