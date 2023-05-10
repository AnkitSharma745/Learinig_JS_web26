let array= [1,2,3,4,5,6];

for(let i=0; i<array.length;i++){
  if(array[i]%3==0){
    console.log(array[i]);
  }
}

let array2= [6,7,8,9,10];

for(let j=0; j<array2.length;j++){
  // if(array2[j]%3==0){
  //   console.log(array2[j]);
  // }

  let ans= divisible_by_3(array2[j]);
  if(ans== true){
    console.log(array2[j]);
  }
  
}


function divisible_by_3(number){
  if(number%3==0){
    return true;
  }
}
