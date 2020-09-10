// The Problem:
// Write a program that prints the numbers from 1 to 100.
// For multiples of three print “Fizz” instead of the number
// For the multiples of five print “Buzz” instead of the number
// For numbers which are multiples of both three and five print “FizzBuzz”

const fizzBuzz = () => {
  const result = [];
  let count = 0;
  while (count < 100) {
    count++;
    if (count % 15 === 0) {
      result.push('FizzBuzz');
      count++;
    }
    if (count % 3 === 0) {
      result.push('Fizz');
      count++;
    }
    if (count % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(count);
    }
  }
  return result;
};

console.log(fizzBuzz());
