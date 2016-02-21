// Given two sorted arrays, Create a function that sorts both arrays into a single array
// Input: two sorted arrays
// Output: single array with all sorted elements

// Time Complexity: Linear O(n)
// Space Complexity: Constant O(1)

// do not use sort()

var a1 = [1,3,5];
var a2 = [2,4,6];
var sorted = [];

var mergeSortedArrays = function(a1, a2) {
  var count1 = 0;
  var count2 = 0;
  for (var i = 0; i < a1.length + a2.length; i++) {

    // check if a1[count1] is less than a2[count2]
    // if the second array is undefined push last elements of a1 into sorted array
    if (a1[count1] <= a2[count2] || a2[count2] === undefined) {
      sorted.push(a1[count1]);
      count1++;
    } else {
      sorted.push(a2[count2]);
      count2++;
    }
  }

  return sorted;

};

console.log(mergeSortedArrays(a1, a2));
// CASE 1: expected [1, 2, 3, 4, 5, 6]
// CASE 2: expected [1, 1, 3, 3, 5, 5]
// CASE 3: expected [1,2,9]
//                  [1,2,3]