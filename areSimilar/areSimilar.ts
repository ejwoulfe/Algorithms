function areSimilar(a: number[], b: number[]): boolean {
  let swapsNeeded = 0;
  if (a.length !== b.length) {
    return false;
  }

  for (let i = 0; i < a.length; i++) {
    if (!a.includes(b[i])) {
      return false;
    } else {
      if (a[i] !== b[i]) {
        swapsNeeded++;
      }
    }
  }
  if (swapsNeeded > 2) {
    return false;
  }

  return true;
}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
console.log(areSimilar([1, 2, 2], [2, 1, 5]));
console.log(areSimilar([1, 2, 2], [2, 1, 2, 2]));
console.log(areSimilar([1, 1, 2, 3], [2, 1, 1, 3]));
