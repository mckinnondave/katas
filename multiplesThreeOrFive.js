function solution(number){
  let sum = 0;
  for (let i = number-1; i > 0; i--) {
    if ([i] % 3 === 0 && [i] % 5 === 0) {
      sum += parseInt([i])
    } else if ([i] % 3 === 0) {
      sum += parseInt([i])
    } else if ([i] % 5 === 0) {
      sum += parseInt([i])
    }
  }
  return sum
}

console.log(solution(10))