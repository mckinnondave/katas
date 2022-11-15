const toJadenCase = (string) => {
  const array = string.toLowerCase().split(" ")
  for (let i = 0; i < array.length; i++) {
    array[i] = array[i][0].toUpperCase() + array[i].slice(1)
  }
  return array.join(" ")
};

console.log(toJadenCase("How can mirrors be real if our eyes aren't real"));