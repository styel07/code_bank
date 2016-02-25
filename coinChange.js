/**********************************************************************
 *  Problem : Coin Change                                             *
 *                                                                    *
 *  Prompt: US Currency has coins in circulation with the             *
 *          following value in cents: [1, 5, 10, 25, 50, 100]         *
 *                                                                    *
 *          Given a value, find how many unique ways to make change   *
 *          given the coin values in circulation.                     *
 *                                                                    *
 *  Input:  An integer N (value from which to make change)            *
 *  Output: An integer (number of unique ways to make change)         *
 *                                                                    *
 *  Time Complexity: NA                                               *
 *  Auxiliary Space Complexity: NA                                    *
 *                                                                    *
 *  Example: input = 11                                               *
 *           output = 4 ([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],           *
 *                       [5, 1, 1, 1, 1, 1, 1],                       *
 *                       [5, 5, 1],                                   *
 *                       [10, 1])                                     *
 *                                                                    *
 *  Challenge Mode: Solve coin change with you solution having:       *
 *                  Time Complexity: O(nm)                            *
 *                  Auxiliary Space Complexity: O(n)                  *
 *  Hint: www.geeksforgeeks.org/dynamic-programming-set-7-coin-change *
 **********************************************************************/

var coinChange = function(total, coins) {
  if (total === 0) {
    return 1;
  } else if (total < 0) {
    return 0;
  }

  ways = 0;
  for (var i = 0; i < coints.length; i++) {
    avail = coins.slice(i);
    ways += coinChange(total - coin[i], avail);
  }

  return ways;
} ;

console.log(coinChange(4, [2,1])); // => 3
console.log(coinChange(10, [5,2,3])); // => 4
console.log(coinChange(11, [5,7])); // => 4
console.log(coinChange(101, [2,4,6,8])); //