// create an object with the following functionality.

// 1. Ability to add 3 students details and their marks in 3 subject
// 2. function to find the student with the least total
//3. function the fund the student with the highest score 

let details= {

  data: [],
  //1. ability to add 3 students details and their marks in their 3 subject.
  addStudent: function (name, english, math, physics){
    let obj= {};
    // obj.name= "value"
    obj.name= name;
    obj.english= english;
      obj.maths= math;
    obj.phy= physics;

    this.data.push(obj);
  },
  // print: function(){
  //   console.log(this.data);
  // }
leastTotal: function (){
  let min= Infinity; 

  let lowStudent= null;
  for(let i=0; i<this.data.length; i++){
    let total= this.data[i].english + this.data[i].maths+ this.data[i].phy;
    if(total<min){
      min= total;
      lowStudent= this.data[i].name;
    }
  }
  console.log(lowStudent,min);
}

  
}

details.addStudent("goku", 23,24,25);
details.addStudent("luffy", 1,2,3);
details.addStudent("nami",2,2,3);

// details.print();
// console.log(details.data);

details.leastTotal();