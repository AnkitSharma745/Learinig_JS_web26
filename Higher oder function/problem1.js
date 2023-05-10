let form= {
  name: "masai",
  age: "2",
  place: "india",
  marks: {
    eng: 35,
    math:30,
    phy:60
  },
  submit: function(){
    console.log(this.name);
    console.log(this.age);
    console.log(this.place);
    console.log(this.marks.eng);
    console.log(this.marks.math); 
    console.log(this.marks.phy);
  },
  reset: function (){
    this.name= "";
    this.age= "";
    this.place= "";
    this.marks.eng="";
    this.marks.math="";
    this.marks.phy= "";
    console.log("name:", this.name);
    console.log("age:", this.age);
    console.log("marks in eng:", this.marks.eng);
  },
  total: function (){
    console.log(this.marks.eng + this.marks.math + this.marks.phy);
  }
}

form.submit();
form.reset();
form.total();