var snakeCase = function(snakeCaseInput) {

  let lettersOnly = snakeCaseInput.replace(/\W/g, " ");
// match from beginning of string (^) uppercase letters and spaces 
  let words = lettersOnly.match(/[A-Z]*[^ A-Z]+/g);
  return words.join("_").toLowerCase();


  // var palindromeNoPunctuation = palindromeInput.replace(/\W/g, "");
  // var palindromeNoSpaces = palindromeNoPunctuation.split(" ").join("").toLowerCase();
  // var reversePalindrome = palindromeNoSpaces.split("").reverse().join("");




}

module.exports = snakeCase
