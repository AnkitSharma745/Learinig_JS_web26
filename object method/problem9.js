let object= {
  array: ["luffy", "zoro", "sanji", "nami"],
  //write a function to print each an every element inside this array.

  print : function (){
    for(let i= 0; i< this.array.length;i++){
      console.log(this.array[i]);
    }
  }
}

object.print();