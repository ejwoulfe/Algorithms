function boxBlur(image: number[][]): number[][] {
  let total = 0;
  let length = 0;
  for (let i = 0; i < image.length; i++) {
    for (let z = 0; z < image[i].length; z++) {
      total += image[i][z];
      length++;
    }
  }
  const tempArr = [];
  const tempArr2 = [];
  const newImage = Math.floor(total / length);
  tempArr2.push(newImage);
  tempArr.push(tempArr2);

  return tempArr;
}

console.log(boxBlur([[1, 1, 1], [1, 7, 1], [1, 1, 1]]));
