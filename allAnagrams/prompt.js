/**
 * Given a single input string, write a function that produces all possible anagrams
 * of a string and outputs them as an array. At first, don't worry about
 * repeated strings.  What time complexity is your solution?
 *
 * Extra credit: Deduplicate your return array without using uniq().
 */

/**
 * example usage:
 * var anagrams = allAnagrams('abc');
 * console.log(anagrams); // [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
 */

//i A sting
//o An array containing all possible anagrams
//c none yet

//I  had to use recursion :(

//iterate through each letter

let example = 'abc';

const allAnagrams = (word) => {
  //if is empty return empty string
  if (!word) {
    return [''];
  }
  let result = {};

  //apply forEach to slice and concat
  word.split('').forEach(function (letter, i) {
    let letterStorage = word.slice(0, i) + word.slice(i + 1);
    //slice(0,i) return ['']

    //use recursion :'( and forEach letterStorage
    allAnagrams(letterStorage).forEach(function (anagram) {
      result[letter + anagram] = true;
    });
  });

  //.keys returns only keys on an Array
  console.log(Object.keys(result));
  return Object.keys(result);
};

console.log(allAnagrams(example));
