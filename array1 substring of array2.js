function inArray(array1, array2) {
  //...
  let tempArr = [];
  for (let i = 0; i < array1.length; i++) {
    for (let z = 0; z < array2.length; z++) {
      console.log(array1);
      if (array2[z].includes(array1[i])) {
        tempArr.push(array1[i]);
        array1.splice(i, 1);
        z = -1;
      }
    }
  }
  return tempArr.sort();
}

a2 = ["lively", "alive", "harp", "sharp", "armstrong"];
a1 = ["live", "strong", "arp"];

console.log(inArray(a1, a2));
