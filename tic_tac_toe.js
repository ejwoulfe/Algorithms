var board = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

let winning = {
  case1: [1,2,3],
  case2: [4,5,6],
  case3: [7,8,9],
  case4: [1,5,9],
  case5: [7,5,3],
  case6: [1,4,7],
  case7: [2,5,8],
  case8: [3,6,9]
}

let playerOne = {
  choices: [5,7,4,1,3]
}

for( let win in winning){
  let count =0;
  winning[win].map((arr)=>{

    if(playerOne.choices.includes(arr)){
      count++;
  
      if(count === 3){
        console.log("found winning case: " + winning[win])
      }

    }
  })
}
