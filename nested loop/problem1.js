let str= "google";
// oogelg


//1. divide the given word into half.
//  a. goo
// b. gle

// 2. reverse this a and b and then joining them 
// a. oog
// b. elg

// a+b= oogelg


// 1. i= (str.lenght/2)-1; //2

// 2. i>=0

// 3. i--

// 4. empty string and try conctenate each and every character string.

let final = "";
for(let i= (str.length/2)-1; i>=0 ;i--){
   final= final + str[i];
}

// console.log(final); //oog


for(let i= str.length-1; i>=(str.length/2);i--){
  final = final +str[i];
}

console.log(final);