function isCaseInsensitivePalindrome(inputString: string): boolean {
  let stringArr = inputString.toLowerCase();
  console.log(stringArr);
  let reversedString = stringArr
    .split("")
    .reverse()
    .join("");

  return reversedString === stringArr;
}

console.log(isCaseInsensitivePalindrome("AaBaa"));
console.log(isCaseInsensitivePalindrome("abac"));
console.log(isCaseInsensitivePalindrome("caBac"));
