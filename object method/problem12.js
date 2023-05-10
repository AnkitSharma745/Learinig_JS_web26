array= ["goku", "gohan", "luffy", "naruto"];


// ["ukog", "nahog", "yfful", "oturan"] output.

// create a object method, where you need to reverse the names in the array.


//1. create a object.
//2. arrray should be inside the object.
//3.write a function which can loop over the array and convert each element of array in reverse order and push them into a new array.

let object= {
  array: ["goku", "gohan","luffy", "naruto"],
  reverseArray: function (){
    let newArray= [];
    for(let i=0;i< this.array.length;i++){
      let bag= "";
      for(let j=this.array[i].length-1;j>=0;j--){
        bag= bag+ this.array[i][j];
      } // we are reversing the element.
      newArray.push(bag); // we are adding the reversed word into new array.
    } //loop over the entire array.
    console.log(newArray); // print the new array.
  }
}

object.reverseArray();