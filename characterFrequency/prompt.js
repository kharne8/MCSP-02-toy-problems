// Write a function that takes as its input a string
// and returns an array of arrays as shown below
// sorted in descending order by frequency
// and then by ascending order by character.

// "aaabbc" => [ [ "a", 3 ], [ "b", 2 ], [ "c", 1 ] ]
// "mississippi" => [ [ "i", 4 ], [ "s", 4 ], [ "p", 2 ], [ "m", 1 ] ]
// "" => [ ]

//I A string
//O An array of arrays with charater and its how many times it shows
//C nested arrays
//E

const countLetter = (string) => {
  //create variables to fill the character. 1 because if its there thers at least 1. Obj to hold key value pairs
  //result beacuse we need to return an array of arrays
  let count = 1;
  let object = {};
  let result = [];

  //run for each on array created by .split('');
  string.split('').forEach((character) => {
    //create a helper var that hold the all character in a array
    let helper = Object.keys(object);
    //if the character does not exist in the array then put it in the object
    //as key value pairs with count. By doint this way we avoid character repetition
    if (!helper.includes(character)) {
      object[character] = count;
    }
    //here if the character already exist in the array then we up the count
    if (helper.includes(character)) {
      object[character]++;
    }
  });
  //now the full object pushes characters and values into result as arrays
  for (character in object) {
    result.push([character, object[character]]);
  }
  //now we simply return the sorted result from high to low count
  return result.sort(([a, b], [c, d]) => d - b);
};

console.log(countLetter('mississippi'));
