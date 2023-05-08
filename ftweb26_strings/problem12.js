

let arr=[ "goku", "gohan", "gon", "luffy", "google", "google", "nami"];

// find out how many words are starting with the letter "g";
 // 4 ==>output

let count=0;
for(let i=0; i<arr.length;i++){

  if(arr[i][0]== "g"){
    count++;
  }
}
console.log(count);