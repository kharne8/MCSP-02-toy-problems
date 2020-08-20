/*
 * Given a sorted array, find the index of an element
 * using a binary search algorithm.
 *
 * Example usage:
 *
 * var index = binarySearch([1, 2, 3, 4, 5], 4);
 * console.log(index); // 3
 * var index = binarySearch([1, 2, 3, 4, 5], 8);
 * console.log(index); // null
 */

let binarySearch = function (array, target) {
  //find the halfway point
  let halfPoint = array.length / 2;
  //use halfway point to split original array into 2
  let firstHalf = array.slice(0, halfPoint);
  let secondHalf = array.slice(halfPoint, array.length);

  //set result to null to return in case number is not found
  let result = null;

  //if found on first half return index
  if (firstHalf.includes(target)) {
    result = firstHalf.indexOf(target);
    //if found on second half return index plus the length of first half to get the index from original array
  } else if (secondHalf.includes(target)) {
    result = secondHalf.indexOf(target) + firstHalf.length;
  }

  return result;
};
let arr = [20, 32, 6, 54, 100, 14, 37, 74, 56, 80, 91];

console.log(binarySearch(arr, 6));
console.log(binarySearch(arr, 74));
console.log(binarySearch(arr, 27));
