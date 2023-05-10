// rest parameter-> it is used to convert all the arugments to array format and store to a varible name.
// (...y)


let print = function( ...a){
  // console.log(a);
  for(let i=0; i<a.length;i++){
    console.log(a[i]);
  }
}


print(1,2,3,4,5,6,7,8,9,10,11,12,13,1,15);