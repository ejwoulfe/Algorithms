function digital_root(n) {
  if (n < 10) {
    return n;
  } else {
    let splitN = n.toString().split("");

    let total = splitN.reduce((acc, value) => {
      let newValue = parseInt(value);
      return (acc += newValue);
    }, 0);
    return digital_root(total);
  }
}
