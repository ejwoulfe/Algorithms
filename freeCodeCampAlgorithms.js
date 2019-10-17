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

/////////////////////////////////////////////////////////////////////////////////////

var escapeChars = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "&": "&amp;",
  "'": "&apos;"
};
function convertHTML(str) {
  let charArr = str.split("");

  for (let i = 0; i < charArr.length; i++) {
    if (Object.keys(escapeChars).includes(charArr[i])) {
      charArr[i] = escapeChars[charArr[i]];
    }
  }

  return charArr.join("");
}

/////////////////////////////////////////////////////////////////////////////////////

function sumFibs(num) {
  let fibArr = [1, 1];
  let total = 2;

  for (let i = 1; fibArr[i - 1] + fibArr[i] <= num; i++) {
    let currentFibNumber = fibArr[i - 1] + fibArr[i];

    if (currentFibNumber % 2 === 1) {
      total += currentFibNumber;
    }
    fibArr.push(fibArr[i - 1] + fibArr[i]);
  }

  return total;
}

sumFibs(10);

/////////////////////////////////////////////////////////////////////////////////////

function sumPrimes(num) {
  let total = 2;
  for (let i = 1; i <= num; i++) {
    for (let z = 2; z < i; z++) {
      if (i % z === 0) {
        break;
      }
      if (z === i - 1) {
        total += i;
      }
    }
  }

  return total;
}

sumPrimes(977);

/////////////////////////////////////////////////////////////////////////////////////

const smallestCommons = arr => {
  let min = 0;
  let max = 0;
  if (arr[0] < arr[1]) {
    min = arr[0];
    max = arr[1];
  } else {
    min = arr[1];
    max = arr[0];
  }
  let final = max;

  for (let i = max - 1; i >= min; i--) {
    if (final % i) {
      final += max;
      i = max;
    }
  }
  return final;
};

smallestCommons([1, 5]);

/////////////////////////////////////////////////////////////////////////////////////

function dropElements(arr, func) {
  for (let i = 0; i < arr.length; i++) {
    console.log(func(arr[i]));
    if (!func(arr[i])) {
      arr.splice(i, 1);
      i = -1;
    } else {
      return arr;
    }
  }
  return arr;
}

dropElements([1, 2, 3, 4], function(n) {
  return n > 5;
});

/////////////////////////////////////////////////////////////////////////////////////

function steamrollArray(arr) {
  while (arr.some(element => Array.isArray(element))) {
    arr = arr.flat();
  }
  return arr;
}

steamrollArray([1, [2], [3, [[4]]]]);

/////////////////////////////////////////////////////////////////////////////////////


function palindrome(str) {
  // Good luck!
  let purgedStr = str.toLowerCase().trim().replace(/[^\w]|_/g, "").replace(/\s+/g, " ");
  let reversedStr = purgedStr.split("").reverse().join("");
  console.log(purgedStr)
  console.log(reversedStr)
  return purgedStr == reversedStr;
}


palindrome("My age is 0, 0 si ega ym.");

/////////////////////////////////////////////////////////////////////////////////////
var Person = function (firstAndLast) {
  // Complete the method below and implement the others similarly
  this.getFullName = function () {
    return firstAndLast;
  }
  this.getFirstName = function () {
    return firstAndLast.split(" ")[0];
  }
  this.getLastName = function () {
    return firstAndLast.split(" ")[1];
  }
  this.setFirstName = function (first) {
    let name = firstAndLast.split(" ");
    name[0] = first;
    firstAndLast = name.join(" ");

  }
  this.setLastName = function (last) {
    let name = firstAndLast.split(" ");
    name[1] = last;
    firstAndLast = name.join(" ");

  }
  this.setFullName = function (fullname) {
    firstAndLast = fullname;


  }

};

var bob = new Person('Bob Ross');



/////////////////////////////////////////////////////////////////////////////////////

function addTogether() {
  var checkNum = function (num) {
    if (typeof num !== "number") {
      return undefined;
    } else return num;
  };

  if (arguments.length > 1) {
    var a = checkNum(arguments[0]);
    var b = checkNum(arguments[1]);
    if (a === undefined || b === undefined) {
      return undefined;
    } else {
      return a + b;
    }
  } else {
    var c = arguments[0];

    if (checkNum(c)) {
      return function (arg2) {
        if (c === undefined || checkNum(arg2) === undefined) {
          return undefined;
        } else {
          return c + arg2;
        }
      };
    }
  }
}

addTogether(2, 3);


/////////////////////////////////////////////////////////////////////////////////////

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  for (var prop in arr) {
    var orbitalPer = Math.round(
      2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3) / GM)
    );
    delete arr[prop].avgAlt;
    arr[prop].orbitalPeriod = orbitalPer;
  }

  return arr;
}

orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);