let details= {
name: "goku",
age : 20 ,
address: "hyderabad",
phone: 123456,
friend: "vegita",
}


// only for object==> for ---in loop

for(let a in details ){
  
  // console.log(a); // it is giving me all the keys.

  // only one way.
  // console.log(details[a]); //it is giving me all the values.

  console.log(a+":"+details[a]);
  
}