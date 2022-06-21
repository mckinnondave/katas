// function arrayDiff(a, b) {
//   let result = []
//   for (const num of a) {
//     if (!b.includes(num)) {
//       result.push(num)
//     }
//   }
//   return result
// }

function arrayDiff(a, b) {
  return a.filter(num => !b.includes(num))
}

console.log(arrayDiff([1,2,3], [1,2]))