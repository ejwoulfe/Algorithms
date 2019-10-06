let occurence = {};

function divideBy(num) {
  let tempArr = [];

  if (!occurence.hasOwnProperty(num)) {
    for (let i = 7; i <= num; i += 7) {
      tempArr.push(i);

      occurence[i] = [...tempArr];
    }
  } else {
    return occurence.num;
  }

  return tempArr;
}

console.log(divideBy(144));
console.log(occurence);
