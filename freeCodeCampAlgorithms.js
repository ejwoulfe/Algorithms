/// Recursion ///
function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return arr[0];
  } else {
    return sum(arr, n - 1) + arr[n];
  }

  // Only change code above this line
}

function rangeOfNumbers(startNum, endNum) {
  if (endNum - startNum === 0) {
    return [startNum];
  } else {
    var numbers = rangeOfNumbers(startNum, endNum - 1);
    numbers.push(endNum);
    return numbers;
  }
}

function countdown(myArray, n) {
  if (n >= 1) {
    myArray = countdown(myArray, n - 1);
    myArray.unshift(n);
  }
  return myArray;
}

<script type="module" src="index.js"></script>;

/// ES6 ///
const makeServerRequest = new Promise((resolve, reject) => {});

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer represents a response from a server
  let responseFromServer;

  if (responseFromServer) {
    // change this line
    resolve("We got the data");
  } else {
    // change this line
    reject("Data not received");
  }
});

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to true to represent a successful response from a server
  let responseFromServer = true;

  if (responseFromServer) {
    resolve("We got the data");
    makeServerRequest.then(result => {
      console.log(result);
    });
  } else {
    reject("Data not received");
  }
});

const makeServerRequest = new Promise((resolve, reject) => {
  // responseFromServer is set to false to represent an unsuccessful response from a server
  let responseFromServer = false;

  if (responseFromServer) {
    resolve("We got the data");
  } else {
    reject("Data not received");
    makeServerRequest.catch(error => {
      console.log(error);
    });
  }
});

makeServerRequest.then(result => {
  console.log(result);
});

/// Regex ///

let myString = "Eleanor Roosevelt";
let myRegex = /(Franklin|Eleanor).*Roosevelt/;
let result = myRegex.test(myString);

// Algos

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];

  // Only change code below this line
  collection.map(object => {
    let counter = Object.keys(source).length;

    for (let prop in object) {
      if (object[prop] == source[prop]) {
        counter -= 1;
      }
    }
    if (counter == 0) {
      arr.push(object);
    }
  });

  // Only change code above this line
  console.log(arr);
  return arr;
}
whatIsInAName([{ apple: 1 }, { apple: 1 }, { apple: 1, bat: 2 }], { apple: 1 });

/////////////////////////////////////////////////////////////////////////////////////

function spinalCase(str) {
  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}
spinalCase("AllThe-small Things");
spinalCase("thisIsSpinalTap");

function translatePigLatin(str) {
  if (str.match(/^[aeiou]/)) return str + "way";

  const consonantCluster = str.match(/^[^aeiou]+/)[0];
  return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

translatePigLatin("consonant");

/////////////////////////////////////////////////////////////////////////////////////

function myReplace(str, before, after) {
  if (before[0] == before[0].toUpperCase()) {
    let afterArr = after.split("");
    afterArr[0] = afterArr[0].toUpperCase();
    after = afterArr.join("");
  }

  let strArr = str.split(" ");
  strArr[strArr.indexOf(before)] = after;

  return strArr.join(" ");
}

myReplace("His name is Tom", "Tom", "john");

/////////////////////////////////////////////////////////////////////////////////////

function pairElement(str) {
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C"
  };

  var arr = str.split("");

  return arr.map(x => [x, pairs[x]]);
}

//test here
pairElement("GCG");

/////////////////////////////////////////////////////////////////////////////////////

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

/////////////////////////////////////////////////////////////////////////////////////

function uniteUnique(...arr) {
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    for (let z = 0; z < arr[i].length; z++) {
      if (!resultArr.includes(arr[i][z])) {
        resultArr.push(arr[i][z]);
      }
    }
  }

  return resultArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);