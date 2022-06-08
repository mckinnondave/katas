function plusMinus(arr) {
  let pos = []
  let minus = []
  let zero = []
    for (const ele of arr) {
      if (ele > 0) {
        pos.push(ele)
      }
      if (ele < 0) {
        minus.push(ele)
      }
      if (ele === 0) {
        zero.push(ele)
      }
    }
  console.log((pos.length / arr.length).toFixed(6));
  console.log((minus.length / arr.length).toFixed(6));
  console.log((zero.length / arr.length).toFixed(6));
}