function candies(n: number, m: number): number {
  if (m % n === 0) {
    return Math.floor(m / n);
  } else {
    for (let i = m; i > 0; i--) {
      if (m % n !== 0) {
        m - 1;
      } else {
        break;
      }
      return Math.floor(m / n);
    }
  }
}

console.log(candies(3, 10));
