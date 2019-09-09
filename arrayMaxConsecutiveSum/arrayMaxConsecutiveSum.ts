function arrayMaxConsecutiveSum(inputArray: number[], k: number): number {
  let max = 0;

  for (let i = 0; i < inputArray.length - k + 1; i++) {
    let currentSum = 0;
    for (let z = i; z < i + k; z++) {
      currentSum += inputArray[z];
    }
    if (max < currentSum) {
      max = currentSum;
    }
  }
  return max;
}

console.log(arrayMaxConsecutiveSum([2, 3, 5, 1, 6], 2));
