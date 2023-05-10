let dress= function(){
  console.log("I bought a new dress which is blue in color");
}

// x= "yes", y = dress;
function party(x,y){
 y();
  console.log(x, "I am going for a party");
}


party("yes", dress);
