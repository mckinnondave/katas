function accum(s) {
  let result = []
	arr = s.toUpperCase().split('')
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i] + (arr[i].repeat(i)).toLowerCase())
  }
  return result.join("-");
}

console.log(accum("ZpglnRxqenU"))