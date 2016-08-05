
var intersect = function(arr1, arr2) {

	// [4,3,8,5]
  // [6,1,4,5]
	var spX = (arr1[0] > arr2[0]) ? arr1[0] : arr2[0]; // 6
  var spY = (arr1[1] > arr2[1]) ? arr1[1] : arr2[1]; // 3

  var x1 = (arr1[0]+arr1[2]);
  var x2 = (arr2[0]+arr2[2]);

  var y1 = (arr1[1]+arr1[3]);
  var y2 = (arr2[1]+arr2[3]);


  var epX = ( x1 > x2 ) ? x2 : x1; // 10
  var epY = (	y1 > y2 ) ? y2 : y1; // 6


  var width = Math.abs(epX - spX);
  var height = Math.abs(epY - spY);
	var result = {x:spX, y:spY, w:width, h:height}
  return result;
}

console.log(intersect([4,3,8,5],[6,1,4,5]));
