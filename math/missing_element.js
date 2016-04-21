/*
Feb 10, 2015
Given an array A consisting of N different integers where those integers are in the range [1..(N + 1)], find the missing element.

Assume that:
N is an integer within the range [0..100,000]
The elements of A are all distinct
Each element of array A is an integer within the range [1..(N + 1)]

Time Complexity: O(n)
Space Complexity: O(1)

Example:
Input: A = [2,3,1,5]
Output: 4

Input: A = [6,2,7,1,4,5]
Output: 3
**/

var sum = 0;
var complementary = 0;
var input = [1,2,5,3];

// iterate thru aray and add everything to find input sum
for (var i = 0; i < input.length; i++) {
  sum += i;
}

for (var j = 0; j < input.length + 1; j++) {
  complementary += j;
}

console.log('This is the missing element', complementary - sum);