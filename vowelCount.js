function getCount(str) {
  let newStr = str.split("");
  let count = 0;
  for (const letter of newStr) {
    if (
      letter === "a" ||
      letter === "e" ||
      letter === "i" ||
      letter === "o" ||
      letter === "u"
    )
      count += 1;
  }
  return count;
}

console.log(getCount("abracadabra"));
