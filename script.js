// Assignment code here
// const rangeOfCharacters = document.getElementById
// ('rangeOfCharacters')
// const rangeOfNumbers = document.getElementById
// ('rangeOfNumbers')

// rangeOfCharacters.addEventListener('input', syncRangeAmount)
// rangeOfNumbers.addEventListener('input', syncRangeAmount)

// Function syncRangeAmount(e) {
//   const value = e.target.value
//   rangeOfCharacters.value = value
//   rangeOfNumbers.value = value
// }




// Get references to the #generate element
var Upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lower = "abcdefghijklmnopqrstuvwxyz"
var number = "1234567890"
var special = "'!@#$%^&*()_+{}:<>?/[]'"

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var password = ''

  var pwdLength = prompt("Between 8 and 128 how many characters would you like your password to contain?")

  while (pwdLength < 8 || pwdLength > 128) {
    alert('Password must be a number between 8 and 128')
    pwdLength = prompt("Between 8 and 128 how many characters would you like your password to contain?")
  }

  var wantsUpper = confirm('would you like uppercase letters?')
  var wantsLower = confirm('would you like lowercase letters?')
  var wantsNumbers = confirm('would you like numbers?')
  var wantsSpecial = confirm('would you like special characters?')

  while (!wantsUpper && !wantsLower && !wantsNumbers && !wantsSpecial) {
    alert('You must choose at least one character type')
    wantsUpper = confirm('would you like uppercase letters?')
    wantsLower = confirm('would you like lowercase letters?')
    wantsNumbers = confirm('would you like numbers?')
    wantsSpecial = confirm('would you like special characters?')
  }

  return password
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
