
// rest operator, HOF.
function print(...b){
  let sum= 0;
  b.forEach(function (a){
    sum= sum+a;
  })
  console.log(sum);
  
}

// sum of this argument.

print(1,2,3,4,5,6);

