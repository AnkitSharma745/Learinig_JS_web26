const voters = [
  {name:'Bob' , age: 30, voted: true},
  {name:'Jake' , age: 32, voted: true},
  {name:'Kate' , age: 25, voted: false},
  {name:'Sam' , age: 20, voted: false},
  {name:'Phil' , age: 21, voted: true},
  {name:'Ed' , age:55, voted:true},
  {name:'Tami' , age: 54, voted:true},
  {name: 'Mary', age: 31, voted: false},
  {name: 'Becky', age: 43, voted: false},
  {name: 'Joey', age: 41, voted: true},
  {name: 'Jeff', age: 30, voted: true},
  {name: 'Zack', age: 19, voted: false}
];

function getVotersSummary(voters) {
let arr= voters.reduce((acc,item)=>{

  if(item.age <20){
    if(item.voted ){
      acc.numYoungVotes++;
    }
    acc.numYoungPeople++;
  }
  else if(item.age >20 && item.age <=40){
    if(item.voted){
      acc.numMidVotesPeople++;
    }
    acc.numMidsPeople++;
  }
  else {
    if(item.voted){
      acc.numOldsPeople++;
    }
    acc.numOldVotesPeople++;
  }
  return acc;

},{ numYoungVotes: 0,
  numYoungPeople: 0,
  numMidVotesPeople: 0,
  numMidsPeople: 0,
  numOldVotesPeople: 0,
  numOldsPeople: 0
})

return arr;
}; 

console.log(getVotersSummary(voters))

/*
If we pass the provided voters array to the function, we expect the following output: 

{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/

// export {
//   getVotersSummary
// }