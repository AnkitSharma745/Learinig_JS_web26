let object= {
  name : "luffy",
  age: 16,
  place: "hyderabad",
  submit: function (){
    console.log(this.name);
    console.log(this.age);
    console.log(this.place);
    console.log(this.address);
  }
}

object.submit();