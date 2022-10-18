const positiveSum = (arr) => {
  if (arr.length === 0) {
    return 0;
  }
  let result = 0;
  for (const num of arr) {
    if (num >= 0) {
      result += num;
    }
  }
  return result;
}