function isPalindrome(word) {
   for (let n = 0; n < word.length / 2; n++) {
    const m = word.length - 1 - n;
    if (word[n] !== word[m]) {
      return false;
    }
   }
   return true;
}

/* 
  Add your pseudocode here
  Iterate from the beginning of the string to the middle of the string,
  compare the letter being iterated over to the corresponding letter at the end of the string
    if the letters don't match, return false

If the middle is reached, and all the letters match, return true
*/

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
