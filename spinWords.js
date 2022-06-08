function spinWords(string) {
  let result = [];
  let newArr = string.split(" ");
  for (const word of newArr) {
    if (word.length < 5) {
      result.push(word);
    } else {
      let newWord = word.split("").reverse().join("");
      result.push(newWord);
    }
  }
  return result.join(' ');
}

console.log(spinWords("Hey fellow warriors"))