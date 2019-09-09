function alternatingSums(a: number[]): number[] {
  let total1 = 0;
  let total2 = 0;
  for (let i = 0; i < a.length; i++) {
    if (i % 2 === 0) {
      total1 += a[i];
    } else {
      total2 += a[i];
    }
  }

  return [total1, total2];
}

console.log(alternatingSums([50, 60, 60, 45, 70]));
