function arrayPreviousLess(items: number[]): number[] {
  let tempArr = [];
  for (let i = 0; i < items.length; i++) {
    if (i === 0) {
      tempArr.push(-1);
    } else if (items[i] > items[i - 1]) {
      tempArr.push(items[i - 1]);
    } else {
      tempArr.push(-1);
    }
  }
  return tempArr;
}

console.log(arrayPreviousLess([3, 5, 2, 4, 5]));
