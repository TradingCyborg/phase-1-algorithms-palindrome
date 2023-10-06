function isPalindrome(word) {
  function isPalindrome(str) {
    // Remove non-alphabet characters and convert to lowercase
    str = str.replace(/[^a-zA-Z]/g, '').toLowerCase();
  
    // Compare the original string with its reverse
    return str === str.split('').reverse().join('');
  }
  
  // Example usage:
  console.log(isPalindrome("mom"));      // true
  console.log(isPalindrome("racecar"));  // true
  console.log(isPalindrome("hello"));    // false
  
}

/* 
  Add your pseudocode here
*/
Function isPalindrome(str)
    // Remove non-alphabet characters and convert to lowercase
    str = RemoveNonAlphabetCharsAndLowercase(str)

    // Compare the original string with its reverse
    return str is equal to ReverseString(str)

Function RemoveNonAlphabetCharsAndLowercase(str)
    result = ""
    for each character in str
        if character is an alphabet letter
            append lowercase of character to result
    return result

Function ReverseString(str)
    reversed = ""
    for i from length of str - 1 down to 0
        append str[i] to reversed
    return reversed

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
