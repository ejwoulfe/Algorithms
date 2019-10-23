function chunkyMonkey(arr, size) {
  let count = 1;
  let tempArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (count == size) {
      tempArr.push(arr.splice(i - 1, count));

      count = 0;
      i = -1;
    } else if (i == arr.length - 1) {
      tempArr.push(arr);
    }
    count++;
  }
  return tempArr;
}

console.log(chunkyMonkey(["a", "b", "c", "d", "e"], 2));
console.log(chunkyMonkey([0, 1, 2, 3, 4, 5], 4));
