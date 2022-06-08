function miniMaxSum(arr) {
  let sum1 = 0
  let sum2 = 0
  for (let i = 0; i < arr.length - 1 ; i++) {
    sum1 += arr[i]
  }
  for (let i = arr.length - 1; i >= arr[0]; i--) {
    sum2 += arr[i]
  }
  console.log(`${sum1} ${sum2}`);
}

miniMaxSum([1,3,5,7,9])