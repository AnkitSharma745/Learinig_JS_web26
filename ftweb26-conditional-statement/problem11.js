// Given stored username and password and input username and password, Print if the user can login or not.

// this username and password are stored in the database.
let credentials_username= "luffy";
let credentials_password= "onepiece";

//while you login.
let username= "luff";
let password= "onepiece";

// when you try to login , the code with compare the username and password with the username and password in database.

if(credentials_username== username){
  
    if(credentials_password== password){
    console.log("I can login");
  }
    else{
    console.log("your password is not matching");
  }

} 
  
else{
  console.log("your username is not matching ");
}