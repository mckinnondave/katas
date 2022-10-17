const duplicateCount = (text) => {
  let obj = {};
  counter = 0;
  let changeCase = text.toLowerCase();
  for (let i = 0; i < changeCase.length; i++) {
    if (!obj[changeCase[i]]) {
      obj[changeCase[i]] = 1;
    }
    else if (obj[changeCase[i]] && obj[changeCase[i]] < 2) {
      obj[changeCase[i]]++;
      counter++;
    }
  }
  return counter
}

console.log(duplicateCount("aabBcde"));