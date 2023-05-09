let details= {
name: "goku",
age : 20 ,
phone: 123456,
friend: "vegita",
  hobbies: ["cricket", "football"],
location: {
  city: "hyderabad",
  state: "telangana",
  pin_code: 500047,
  landmark: "near hospital"
},

}

console.log(details.location.city);// dot

console.log(details["location"]["state"]); //bracket