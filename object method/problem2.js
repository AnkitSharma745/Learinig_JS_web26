
let details= {
  name: "goku",
  age: 21,
  address: "delhi",
  print: function (){
    console.log("hello everyone");
  }
}

// if we can to call the function print.

details.print(); // dot notation.

details["print"](); // bracket notation.