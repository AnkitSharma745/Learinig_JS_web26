// [1,2,3];
// ==> "123"

// array ---> string


function array_to_string(arr){
  let result="";
  for(let i=0; i<arr.length;i++){
    result= result+ arr[i]
  }
  console.log(result);
}

array_to_string([1,2,3]);
array_to_string([2,3,4,5,6]);
array_to_string([5,6,6,78,8]);

