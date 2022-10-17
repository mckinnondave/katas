var fibsFizzBuzz = function(num) {
  const fibArray = [1, 1]
  const fizzBuzzArray = [];

  if (num <= 1) {
    return [num];
  }

  for (let i = 2; i < num; i++) {
    fibArray[i] = fibArray[i-1] + fibArray[i-2];
  }
  
  for (const number of fibArray) {
    if (number % 3 === 0 && number % 5 === 0) {
      fizzBuzzArray.push("FizzBuzz")
    }
    else if (number % 3 === 0) {
      fizzBuzzArray.push("Fizz")
    }
    else if (number % 5 === 0) {
      fizzBuzzArray.push("Buzz")
    }
    else {
      fizzBuzzArray.push(number);
    }
  }
  return fizzBuzzArray
}

console.log(fibsFizzBuzz(20))