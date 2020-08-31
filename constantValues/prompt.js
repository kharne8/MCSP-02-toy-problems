// Given a lowercase helper that has alphabetic characters only and no spaces,
// return the highest value of consonant subhelper
// EXAMPLES
// -- We shall assign the following values: a = 1, b = 2 ... z = 26.

// For example, for the word "zodiacs", solve("zodiacs") = 26
// -- The consonant subhelper are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.

// For the word "strength", solve("strength") = 57
// -- The consonant subhelper are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.

function constantValues(string) {
  const alphabet = {
    b: 2,
    c: 3,
    d: 4,
    f: 6,
    g: 7,
    h: 8,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  let keys = Object.keys(alphabet);
  let helper = string.toLowerCase().split('');
  let result = [];
  let sum = 0;

  for (let i = 0; i < helper.length; i++) {
    if (keys.includes(helper[i])) {
      helper[i] = alphabet[helper[i]];
    }
    console.log(helper);

    if (typeof helper[i] === 'string') {
      sum = 0;
    } else {
      if (Number.isInteger(helper[i])) {
        sum += helper[i];
        result.push(sum);
      }
    }
    result.sort((a, b) => a - b);
  }
  return result[result.length - 1];
}

// For example, for the word "zodiacs", solve("zodiacs") = 26
// -- The consonant subhelper are: "z", "d" and "cs" and the values are z = 26, d = 4 and cs = 3 + 19 = 22. The highest is 26.
console.log(constantValues('zodiacs'));

// For the word "strength", solve("strength") = 57
// -- The consonant subhelper are: "str" and "ngth" with values "str" = 19 + 20 + 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57.
console.log(constantValues('strength'));

console.log(constantValues('Mississipi'));
console.log(constantValues('hello'));
console.log(constantValues('Marco'));
