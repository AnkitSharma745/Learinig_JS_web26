
let a= [1,2,3, -1, -2, -3]

//[1, 1, 1, 0 , 0 , 0] --> output 


for(let i=0; i<a.length;i++){
  if(a[i]>0){
    a[i]=1
  }
  else{
    a[i]=0
  }
}

console.log(a);