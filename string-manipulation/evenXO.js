function XO(str) {
  //code here
  var count = 0;
  var result;

  for (var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === 'x') {
      count++;
    } else if ( str[i].toLowerCase() === 'o' ) {
      count--;
    }
  }

  if (count === 0 || (count % 2 === 0 && count > 1)) {
    result = true;
    return result;
  } else {
    result = false;
    return result;
  }
}

XO('xo'); // true;
XO('xxOo'); // true;
XO('xxxm'); // false;
XO('Oo'); // false;
XO('ooom'); // false;

// BEST PRACTICE
// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }