function highAndLow(numbers){
  let arrayOfNums = numbers.split(' ').sort((a, b) => a - b)
  return `${arrayOfNums[arrayOfNums.length-1]} ${arrayOfNums[0]}`
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));