function reverseString(input) {
  if (input.length === 0) {
    return "";
  }
  return input[input.length-1] + reverseString(input.slice(0,input.length-1));
}

reverseString("hello");

function reverse (str) {
  if (str === "") {
    return "";
  } else {
      r eturn reverse(str.substr(1)) + str.charAt(0);
  }
}