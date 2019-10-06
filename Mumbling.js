function duplicateEncode(word) {
    let wordArr = [...word];
    wordArr.map((letter, index) => {

        if (word.substring(index + 1, word.length).includes(letter)) {
            return "("
        } else {
            return ")"
        }
    }
      );
    
  
}
