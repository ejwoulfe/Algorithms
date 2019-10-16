function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let alphArr = alphabet.split("");
  let indexes = [];

  for (let i = 0; i < str.length; i++) {
    indexes.push(alphArr.indexOf(str[i]));
  }

  let counter = 0;
  for (let i = indexes[0]; i < indexes[indexes.length - 1]; i++) {
    if (indexes[counter] !== i) {
      return alphArr[i];
    }
    counter++;
  }
}
fearNotLetter("stvwx");
