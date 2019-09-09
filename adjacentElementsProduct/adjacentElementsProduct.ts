function adjacentElementsProduct(inputArray: number[]): any {
  let largestProduct = 0;
  inputArray.map((value, index) => {
    if (index !== inputArray.length - 1) {
      if (value * inputArray[index + 1] > largestProduct) {
        largestProduct = value * inputArray[index + 1];
      }
    }
  });
  return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));
console.log(adjacentElementsProduct([3, 6, -2, 5, 7, 3]));
