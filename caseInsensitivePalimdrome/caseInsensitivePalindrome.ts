function isCaseInsensitivePalindrome(inputString: string): boolean {
  let inputStringLowerCase = inputString.toLocaleLowerCase();
  let reversedWord = inputStringLowerCase
    .split("")
    .reverse()
    .join("");

  return reversedWord === inputStringLowerCase;
}

console.log(isCaseInsensitivePalindrome("AaBaa"));
console.log(isCaseInsensitivePalindrome("abac"));
