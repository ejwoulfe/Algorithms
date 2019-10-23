function characterParity(symbol) {
  let digit = parseInt(symbol);

  if (isNaN(digit)) {
    return "not a digit";
  } else {
    if (digit % 2 === 0) {
      return "even";
    } else {
      return "odd";
    }
  }
}

console.log(characterParity("57"));
console.log(characterParity("88"));
console.log(characterParity("q"));
