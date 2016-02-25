function reverseString(input) {
  if (input.length === 0) {
    return "";
  }
  return input[input.length-1] + reverseString(input.slice(0,input.length-1));
}

reverseString("hello");