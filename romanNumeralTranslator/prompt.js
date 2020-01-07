/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(input) {
  var X = 10;
  var I = 1;
  //return null if input not a string
  if (!input.typeOf === String && undefined && Number) {
    return null;
  }
  //result var
  var result = 0;
  //use split to turn into array
  var number = input.split("");
  //if left number is < than the number of right subtract else add resturn number
  if (number[0] < number[1]) {
    result = number[1] - number[0];
  } else {
    result = number[0] + number[1];
  }
  return result;
};

translateRomanNumeral(2);
