function allLongestStrings(inputArray: string[]): string[] {
  let lengthOfValue = inputArray[0].length;
  let longestStringArray = [];

  inputArray.map(value => {
    if (value.length > lengthOfValue) {
      lengthOfValue = value.length;
      longestStringArray = [];
    }
    if (value.length === lengthOfValue) {
      longestStringArray.push(value);
    }
  });
  return longestStringArray;
}

console.log(allLongestStrings(["ba", "aa", "ad", "vcd", "abaa"]));
