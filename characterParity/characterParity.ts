function characterParity(symbol: string): string {
  if (isNaN(Number(symbol))) {
    return "not a digit";
  } else {
    if (Number(symbol) % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
}

console.log(characterParity("5"));
console.log(characterParity("8"));
console.log(characterParity("q"));
