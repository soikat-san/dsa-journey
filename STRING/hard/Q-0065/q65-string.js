// LC Q65
// Valid Number

function isNumber(s) {
  // Regular expression breakdown:
  // ^\s*                => Allows leading whitespace.
  // [+-]?               => Optional sign.
  // (                   => Begin group for the number part.
  //    \d+(\.\d*)?      => Digits before optional decimal point and fractional part.
  //    |                => OR
  //    \.\d+            => A decimal point must be followed by one or more digits.
  // )
  // ([eE][+-]?\d+)?     => Optional exponent part with optional sign and one or more digits.
  // \s*$                => Allows trailing whitespace.
  const regex = /^\s*[+-]?((\d+(\.\d*)?)|(\.\d+))([eE][+-]?\d+)?\s*$/;
  return regex.test(s);
}
