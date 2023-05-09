let arr= [1,2,3,4,5,1,2,3,4,5,6,7,8];

//1. convert this array into object with their occurancies.

let object ={};


for(let i=0; i<arr.length;i++){
  if(object[arr[i]] == undefined){
    object[arr[i]]=1;
  }
  else{
    object[arr[i]]++;
  }
}
// console.log(object);

//2. delete the occurance who are even in number.

for(let e in object){
  if(object[e]%2==0){
    delete object[e];
  }
}
console.log(object);
