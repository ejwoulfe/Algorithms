function addTwoDigits(n: any): number {
  const stringOfNumber = String(n);
  let firstDigit = stringOfNumber.substring(0, 1);
  let secondDigit = stringOfNumber.substring(1, 2);
  const twoDigits = Number(parseInt(firstDigit) + parseInt(secondDigit));

  return twoDigits;
}
function addTwoDigits2(n: any): number {
  const nums = n.toString().split("");

  return parseInt(nums[0]) + parseInt(nums[1]);
}

console.log(addTwoDigits2(29));
console.log(addTwoDigits2(39));
console.log(addTwoDigits2(11));
