function list(names) {
  let front = [];
  let end = [];
  names.map((value, index) => {
    if (index >= names.length - 2) {
      end.push(value.name);
    } else {
      front.push(value.name);
    }
  });
  if (end.length == 1) {
    return end[0];
  } else if (end.length == 2 && front.length == 0) {
    return end.join(" & ");
  } else if (end.length == 0) {
    return "";
  } else {
    let arr = [[front.join(", ")], [end.join(" & ")]].join(", ");
    return arr;
  }
}
