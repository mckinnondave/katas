function findOdd(array) {
  let count = 0;
  for (const num1 of array) {
    for (const num2 of array) {
      if (num1 === num2) {
        count++;
      }
    }
    if (count % 2 !== 0) {
      return num1;
    }
  }
}
