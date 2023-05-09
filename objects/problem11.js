// given an array find the unique items in the array.


let array= ["luffy", "gohan", "goku","luffy", "gohan", "goku", "picalo", "nami"]

//5

// "" , [], {}

let a = {}; //empty object

// adding key and values inside the object
// objectname.key= value
// objectname["key"] =value;

for(let i=0; i<array.length;i++){
a[array[i]] = "unique";
  
}

// console.log(a);

// lenght of the object.
console.log(Object.keys(a).length);
