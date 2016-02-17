/*
The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

Task

Given an array of integers, remove the smallest value. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

Don't change the order of the elements that are left.


**/

function removeSmallest(numbers) {
  var list = {};
  // create a hash table that will increment a number based on how many times it appears in the array
  // iterate thru numbers array and push the values onto an object as the key
  for (i = 0; i < numbers.length; i++) {
    for (var j in list) {
      if(list[j]j)
      // push onto list object as key the number in array
      list[i] = numbers[i];
      // if duplicate is found then the val of that pair will be greater than 1
      list[number[i]] += 1;
    }
  }

  return numbers;
}