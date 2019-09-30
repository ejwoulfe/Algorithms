function avoidObstacles(inputArray: number[]): number {
  for (let i = 1; i <= inputArray[inputArray.length - 1]; i++) {
    if (inputArray.every(element => element % i !== 0)) {
      return i;
    }
  }
}

console.log(avoidObstacles([5, 3, 6, 7, 9]));
