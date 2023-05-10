// // create a object with keys length and width and also write a function inside that object.


// length
// width
// area --> console.log(area) //function
// perimeter--> console.log(perimeter) // functions.


// //write 2 functions inside this object, 
// 1. it should check the area of that length and width
// 2. it should check the perimeter of that length and width

let object={

  length: 5,
  width: 4,
  area: function (){
    console.log("area-", (this.length * this.width))
  },
  perimeter: function (){
  return ("peimeter-", 2*(this.length + this.width));
  }
}

object.area();
console.log(object.perimeter());