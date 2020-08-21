// INSTRUCTIONS
// Bubble sort is considered the most basic sorting algorithm in Computer Science. It works by starting at the first element of an array and comparing it to the second element:

// If the first element is greater than the second element, it swaps the two.
// It then compares the second to the third, and the third to the fourth, and so on.
// In this way, the largest values ‘bubble’ to the end of the array.
// Once it gets to the end of the array, it starts over and repeats the process until the array is sorted numerically.
// Implement a function that takes an array and sorts it using this technique.

// NOTE: DO NOT use JavaScript’s built-in sorting function (Array.prototype.sort).

//I A array of numbers
//O A array of numbers in ascending order
//C do not use .sort
//E none

let test = [4, 3, 6, 2, 7, 1, 9, 2, 5, 8];

const bubbleSort = (array) => {
  //create a holding var for swap
  let hold = 0;
  //loop to cap the amount of times the array get iterated
  for (let i = array.length; i > 0; i--) {
    //nested for loop to check for numbers greater number
    for (let j = 0; j < array.length; j++) {
      //if the current j is grater than the next(j+1) than swap
      if (array[j] > array[j + 1]) {
        //to swap hold becmes j
        hold = array[j];
        //them array[j] becomes array[j+1]
        array[j] = array[j + 1];
        //and  finally array[j + 1] becomes hold
        array[j + 1] = hold;
      }
    }
  }
  //finally resturn the sorted array
  return array;
};

console.log(bubbleSort(test));
