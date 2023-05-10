
let object= {
  name : "john",
  greet: ()=>{
    console.log(this.name);
  }
}

object.greet();

//when we use arrow function inside the object and we try to use this word inside it, what happen is

// the compiler will check if there is any refernce of name word in the global scope.

//global scope
//local scope
//block scope.