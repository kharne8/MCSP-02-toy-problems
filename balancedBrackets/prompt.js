// Given a string, return true if it contains all balanced parenthesis (),
// curly-brackets {}, and square-brackets [].

//                        Examples
//               Input	                       Output
// str: "(x + y) - (4)"           |   true
// str: "(x + y) - (4)"           |   true
// str: "(((10 ) ()) ((?)(:)))"   |   true
// str: "[{()}]"                  |   true
// str: "(50)("                   |   false

const isBalanced = (str) => {
  //create a var count to return positive or negative number
  let count = 0;
  //turn the string into an array to iterate thru
  let splits = str.split('');
  for (let i = 0; i < str.length; i++) {
    //if index equals opening bracets count goes up
    if (splits[i] === '(' && '[' && '{') {
      count++;
    }
    //if index equals closing bracket count goes down
    if (str[i] === ')' && ']' && '}') {
      count--;
    }
    //if count is a even number return true else false
    if (count === 0) {
      return true;
    } else {
      return false;
    }
  }
};

let example = '{[()]}';

console.log(isBalanced(example));
