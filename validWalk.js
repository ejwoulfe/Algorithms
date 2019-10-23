function isValidWalk(walk) {
  let nCnt = 0;
  let sCnt = 0;
  let wCnt = 0;
  let eCnt = 0;
  if (walk.length !== 10) {
    return false;
  } else {
    walk.map(value => {
      if (value === "n") {
        nCnt++;
      } else if (value === "s") {
        sCnt++;
      } else if (value === "w") {
        wCnt++;
      } else if (value === "e") {
        eCnt++;
      }
    });

    if (nCnt !== sCnt || wCnt !== eCnt) {
      return false;
    } else {
      return true;
    }
  }
}
