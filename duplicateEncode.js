function duplicateEncode(word){
  let wordArr = word.toLowerCase();
  let uniqueChar = '';
  for (let i = 0; i < wordArr.length; i++) {
    if (wordArr.lastIndexOf(wordArr[i]) === wordArr.indexOf(wordArr[i])) {
      uniqueChar += "("
    } else {
      uniqueChar += ")"
    }
  }
  return uniqueChar;
}

// console.log(duplicateEncode("din"));
// console.log(duplicateEncode("recede"));
console.log(duplicateEncode("Success"));