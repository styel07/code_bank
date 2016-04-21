/*
Given a string input
filter the 'noise' /[%$&\/#·@|º\\ª]/g
so that the returned string is clean
**/

function removeNoise(str){
  var str;
  return str.replace(/[%$&\/#·@|º\\ª]/g, "");
}