function disemvowel(str) {
  let result = ""
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
  arr = str.split('');
  for (const letter of arr) {
    if (!vowels.includes(letter)) {
      result += letter;
    }
  }
  return result;
}

console.log(disemvowel("No offense but,\nYour writing is among the worst I've ever read"));