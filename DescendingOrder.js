const descendingOrder = nums => {
  let descendingNums = nums.toString().split('').sort((a, b) => b - a).join('')
  return parseInt(descendingNums);
}