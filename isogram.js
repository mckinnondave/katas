function isIsogram(str){
  let result = []
  let arr = str.split("")
  for (letter of arr) {
    if (result.includes(letter)) {
      return false
    } else {
      result.push(letter)
    }
  }
  return true
}

console.log(isIsogram("Dermatoglyphics"))