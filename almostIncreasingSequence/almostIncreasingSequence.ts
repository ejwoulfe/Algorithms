function almostIncreasingSequence(sequence: number[]): boolean {
  let mistakeCounter = 0;
  for (let i = 0; i < sequence.length - 1; i++) {
    if (sequence[i] <= sequence[i - 1]) {
      mistakeCounter++;
      if (
        sequence[i] <= sequence[i - 2] &&
        sequence[i + 1] <= sequence[i - 1]
      ) {
        return false;
      }
    }
  }
  return mistakeCounter <= 1;
}

console.log(almostIncreasingSequence([1, 3, 1, 2]));
console.log(almostIncreasingSequence([1, 3, 2]));
console.log(almostIncreasingSequence([1, 3, 2, 5, 6, 7, 8]));
