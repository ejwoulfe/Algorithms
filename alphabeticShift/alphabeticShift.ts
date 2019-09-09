function alphabeticShift(inputString: string): string {
  let newString = "";
  for (let i = 0; i < inputString.length; i++) {
    let letter = inputString.charCodeAt(i) + 1;
    if (letter === 123) {
      letter = 97;
    }

    console.log(letter);
    newString += String.fromCharCode(letter);
  }
  return newString;
}

console.log(alphabeticShift("crazy"));
console.log(alphabeticShift("zabby"));
