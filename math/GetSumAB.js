// Example:
// GetSum(1, 0) == 1   // 1 + 0 = 1
// GetSum(1, 2) == 3   // 1 + 2 = 3
// GetSum(0, 1) == 1   // 0 + 1 = 1
// GetSum(1, 1) == 1   // 1 Since both are same
// GetSum(-1, 0) == -1 // -1 + 0 = -1
// GetSum(-1, 2) == 2  // -1 + 0 + 1 + 2 = 2

function GetSum( a,b )
{
  //If they are the same return a or b
  var tmp = 0;
  if (a < b)
    while (a <= b) tmp += a++;
  else
    while (a >= b) tmp += a--;

  return tmp;

}

// Test.describe("Basic Tests:", function(){
//   Test.assertEquals(GetSum(0,-1),-1);
//   Test.assertEquals(GetSum(0,1),1);
// });