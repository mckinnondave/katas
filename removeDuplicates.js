/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let newArr = [];
  for (const num of nums) {
    if (!newArr.includes(num)) {
      newArr.push(num);
    }
  }
  console.log(newArr);
  return newArr.length;
};

let nums = [1,1,2]

console.log(removeDuplicates(nums));
