// function findOutlier(integers){
//   even = [];
//   odd = [];
//   for (const integer of integers) {
//     if (integer % 2 === 0) {
//       even.push(integer)
//     } else {
//       odd.push(integer)
//     }
//   }
//   if (even.length === 1) {
//     return even[0]
//   }
//   return odd[0]
// }

// console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
// console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));


// Refactor

function findOutlier(integers){
  let even = integers.filter(int => (int % 2) === 0)
  let odd = integers.filter(int => (int % 2) !== 0)
  return even.length === 1 ? even[0] : odd[0];
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]));