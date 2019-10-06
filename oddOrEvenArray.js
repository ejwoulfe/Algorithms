function oddOrEven(array) {
  let total = array.reduce((acc, value) => {
    return (acc += value);
  }, 0);
  if (total % 2 === 0) {
    return "even";
  } else {
    return "odd";
  }
}
