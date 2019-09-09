function areEquallyStrong(
  yourLeft: number,
  yourRight: number,
  friendsLeft: number,
  friendsRight: number
): boolean {
  let youArms = [yourLeft, yourRight].sort((a, b) => {
    return a - b;
  });
  let friendsArms = [friendsLeft, friendsRight].sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < youArms.length; i++) {
    if (youArms[i] !== friendsArms[i]) {
      return false;
    }
  }
  return true;
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
console.log(areEquallyStrong(3, 3, 11, 3));
