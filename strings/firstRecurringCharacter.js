/**
 * Find the first recurring character in the string
 *
 * input: 'abbc', output: 'a'
 * input: 'abcd', output: false
 *
 *
 */

function getFirstRecurringCharacther(testString) {
    var i = 0;
    var seenChars = {};
    for (i; i < testString.length; i++) {
          var char = testString.charAt(i);
          if (seenChars[char]) {
                  return char;
                }
          seenChars[char] = true;
        }
    return false;
}

console.log(getFirstRecurringCharacther('aabacbca'))
console.log(getFirstRecurringCharacther('a'))
console.log(getFirstRecurringCharacther('cxa'))
