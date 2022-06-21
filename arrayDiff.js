function arrayDiff(a, b) {
  let result = []
  for (const num of a) {
    if (!b.includes(num)) {
      result.push(num)
    }
  }
  return result
}

console.log(arrayDiff([1,2,3], [1,2]))