/**
  you are required to, given a string,
  replace every letter with its position in the alphabet.

  If anything in the text isn't a letter, ignore it and don't return it.

  a being 1, b being 2, etc. As an example:

  alphabet_position("The sunset sets at twelve o' clock.")
  Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" (As a string.)
*/

function alphabetPosition(text) {
  var result = '';
  var alpha =
{ 'a' : 1, 'b' : 2, 'c' : 3, 'd' : 4, 'e' : 5, 'f' : 6, 'g' : 7, 'h' : 8,
  'i' : 9, 'j' : 10, 'k' : 11, 'l' : 12, 'm' : 13, 'n' : 14, 'o' : 15, 'p' : 16,
  'q' : 17, 'r' : 18, 's' : 19, 't' : 20, 'u' : 21, 'v' : 22, 'w' : 23, 'x' : 24,
  'y' : 25, 'z' : 26,
  'A' : 1, 'B' : 2, 'C' : 3, 'D' : 4, 'E' : 5, 'F' : 6, 'G' : 7, 'H' : 8,
  'I' : 9, 'J' : 10, 'K' : 11, 'L' : 12, 'M' : 13, 'N' : 14, 'O' : 15, 'P' : 16,
  'Q' : 17, 'R' : 18, 'S' : 19, 'T' : 20, 'U' : 21, 'V' : 22, 'W' : 23, 'X' : 24,
  'Y' : 25, 'Z' : 26 };

  for (var i = 0; i < text.length; i++) {
    // match the text[i] to corresponding alpha key:value
    if (text[i] in alpha) {
      result += (alpha[text[i]] + ' ');
    }
  }

  return result.slice(0, -1);
}