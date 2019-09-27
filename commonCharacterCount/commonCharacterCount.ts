function commonCharacterCount(s1, s2) {
  let strOneArr = s1.split("");
  let strTwoArr = s2.split("");
  let resultArr = [];

  for (let i = 0; i < strOneArr.length; i++) {
    console.log(strOneArr);
    console.log(strTwoArr);
    for (let z = 0; z < strTwoArr.length; z++) {
      if (strOneArr[i] == strTwoArr[z]) {
        resultArr.push(strOneArr[i]);
        console.log("found");
        strOneArr.splice(i, 1);
        strTwoArr.splice(z, 1);

        i = i - 1;
        z = -1;
      }
    }
  }
  return resultArr.length;
}

console.log(commonCharacterCount("aabcac", "adcaa"));
