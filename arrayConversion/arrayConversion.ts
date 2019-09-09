function arrayConversion(inputArray: number[]): any {
  let tempArr = [];
  const arrLength = inputArray.length / 2 - 1;

  for (let counter = 1; counter <= arrLength; counter++) {
    if (counter % 2 !== 0) {
      for (let i = 0; inputArray.length > 0; i++) {
        tempArr.push(inputArray[0] + inputArray[1]);
        inputArray.splice(0, 2);
      }
    } else {
      for (let i = 0; inputArray.length > 0; i++) {
        tempArr.push(inputArray[0] * inputArray[1]);
        inputArray.splice(0, 2);
        console.log(inputArray);
      }
    }

    inputArray = tempArr;

    tempArr = [];
  }
  return inputArray[0];
}

console.log(arrayConversion([1, 2, 3, 4, 5, 6, 7, 8]));
