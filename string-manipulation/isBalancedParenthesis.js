/*
Given a string, write a function called balancedParens to examine whether the pairs of parentheses “()” are balanced in the string.

Time Complexity: O(n)
Space Complexity: O(n)

Example:
Input: balancedParens(“()()”)
Output: true

Input: balancedParens(“(())”)
Output: true

Input: balancedParens(“()(“)
Output: false
**/

var input = '(ab)(asd))';
var parenthesis = 0;

// iterate thru string using char()

for (var i = 0; i < input.length; i++) {
  if (input[i] === '(') {
    parenthesis++;
  }
  if (input[i] === ')') {
    parenthesis--;
  }
}

if (parenthesis !== -1 && parenthesis === 0) {
  console.log('this is the count', parenthesis);
} else {
  console.log('error');
}