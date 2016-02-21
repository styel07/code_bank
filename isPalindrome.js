/**
 * isPalindrome
 *
 * Given an input word, return true or false if that word is a palindrome.
 *
 **/

// input: string
// output: boolean

// T: linear O(n)
// S: constant O(1)

// can't use reverse method

var isPalindrome = function(word) {
  var result = false;
  var pointer = 0;

  // iterate thru the string in reverse
  for (var i = word.length - 1; i >= 0; i--) {
    // check if word[i] === word[pointer]
    if (word[i] === word[pointer]) {
      result = true;
      pointer++;
    } else {
      return false;
    }
  }
  return result;
};



console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("outco")); // false
