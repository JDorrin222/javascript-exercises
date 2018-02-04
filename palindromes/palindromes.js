var palindromes = function(palindromeInput) {
var palindromeNoPunctuation = palindromeInput.toLowerCase().replace("!.,", "");
var palindomeNoSpaces = palindromeNoPunctuation.split(" ").join("");
var reversePalindrome = palindromeNoPunctuation.split(" ").reverse().join("");

if(palindomeNoSpaces == reversePalindrome){
  return true;
} else {
  return false;
}


}

module.exports = palindromes
