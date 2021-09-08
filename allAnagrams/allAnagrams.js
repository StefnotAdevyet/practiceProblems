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

var allAnagrams = function (string, anagram = '') {
  const result = [];
  for (let i = 0; i < string.length; i++) {
    let word = `${string[i]}`;
    for (let ii = 0; ii < string.length; ii++) {
      if (i === ii) {
        continue;
      }
      word = word.concat(string[ii]);
    }

    result.push(word);
    word = `${string[i]}`
    for (let ii = string.length - 1; ii > -1; ii--) {
      if (i === ii) {
        continue;
      }
      word = word.concat(string[ii]);
    }

    result.push(word)
  }
  return result;
};