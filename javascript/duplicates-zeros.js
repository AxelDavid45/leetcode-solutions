/**
 * https://leetcode.com/explore/learn/card/fun-with-arrays/525/inserting-items-into-an-array/3245/
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let i = 0;
  while (i < arr.length - 1) {
    if (arr.at(i) === 0) {
      for (let j = arr.length - 2; j > i; j--) {
        arr[j + 1] = arr[j];
      }
      arr[i + 1] = arr[i];
      i += 2;
    } else {
      i++;
    }
  }
};
