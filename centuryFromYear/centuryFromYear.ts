function centuryFromYear(year: number): number {
  let stringYear = String(year);
  let lastTwoDigits = stringYear.substring(
    stringYear.length - 2,
    stringYear.length
  );
  let century = stringYear.substring(0, stringYear.length - 2);

  if (parseInt(lastTwoDigits) >= 1) {
    return parseInt(century) + 1;
  } else {
    return parseInt(century);
  }
}

console.log(centuryFromYear(1905));
console.log(centuryFromYear(1700));

// function centuryFromYear(year) {
//     if (year % 100 === 0) {
//         return parseInt(year / 100);
//     } else {
//         return year / 100 + 1;
//     }
// }

// console.log(centuryFromYear(1903));
// console.log(centuryFromYear(1700));
