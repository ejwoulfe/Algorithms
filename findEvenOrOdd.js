function iqTest(numbers) {
  let numArr = numbers.split(" ");

  let evenCounter = 0;
  let oddCounter = 0;
  let evenIndex = 0;
  let oddIndex = 0;
  let finalIndex = 0;
  for (let i = 0; i < numArr.length; i++) {
    let numVal = parseInt(numArr[i]);

    if (numVal % 2 === 0 && evenCounter < 3) {
      evenCounter += 1;
      evenIndex = i + 1;
    } else if (numVal % 2 === 1 && oddCounter < 3) {
      oddCounter += 1;
      oddIndex = i + 1;
    }

    if (oddCounter > 1 && numVal % 2 === 0) {
      finalIndex = evenIndex;
      break;
    } else if (evenCounter > 1 && numVal % 2 === 1) {
      finalIndex = oddIndex;
      break;
    } else if (oddCounter > 1) {
      finalIndex = evenIndex;
    } else if (evenCounter > 1) {
      finalIndex = oddIndex;
    }
  }

  return finalIndex;
}
