function isPalindrome(word) {
  // Write your algorithm here
}
function reverseString(str){
  return str.split("").reverse().join("");
}

function isPalindrome(str){
  const wordReverse = reverseString(str);

  return str === wordReverse;
}

/* 
  Add your pseudocode here
*/
// If reversed word = word input, return true


/*
  Add written explanation of your solution here
*/
// built a function with built-in functions to chain together three methods
// for reversing a string

//I then created a variable to compare reverseString function to word input
// then used strict comparison operator to return true or false



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
