// print masai 5 times --> 1

// then print school for 2 times ---> 2

// print Hi everyone for 3 times ....> 3


function print_masai(){
  console.log("masai");
}

function print_school(){
  console.log("school");
}

function print_hi_everyone(){
  console.log("Hi everyone");
}

for(let i=1; i<=5; i++){
  print_masai();
}

for(let i=1; i<=2; i++){
  print_school();
}

for(let i=1; i<=3;i++){
  print_hi_everyone();
}

