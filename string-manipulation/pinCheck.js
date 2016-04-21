/* Create a function that checks the pin and returns true only if the input is length 4 and 6.

check for edge cases in input:
1234    true
123456  true
12c456  false
123d    false
1       false
1234567 false
**/

function checkPin(pin) {
  var access = false;
  var convert = parseInt(pin);
  // check if pin input is of type number after its parsed
  if (typeof (convert) === 'number') {

    // splits pin into an array to check for length
    var cleaned = ('' + pin).split('');
    console.log(cleaned);

    // check if the pin is of length 4 or 6, if true set access to true
    if (cleaned.length === 4 || cleaned.length === 6) {
      access = true;
    }
  }
  return access;
}

console.log(checkPin('009304'));
