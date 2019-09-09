function addBorder(picture: string[]): string[] {
  let padArr = [];
  picture.map(value => {
    value = "*" + value + "*";
    padArr.push(value);
  });
  const wallArray = ["****", ...padArr, "****"];
  return wallArray;
}

console.log(addBorder(["abc", "ded"]));
console.log(addBorder(["abc", "ded", "abc", "abc", "abc"]));
