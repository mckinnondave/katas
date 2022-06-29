function squareDigits(num){
  let numArr = (num).toString().split("")
  let result = []
  for (let num of numArr) {
    result.push(Math.pow(Number(num), 2))
  }
  return Number(result.join(''));
}

console.log(squareDigits(9119))