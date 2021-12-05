// creating variables to hold all characters
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var lower = "abcdefghijklmnopqrstuvwxyz"
var numbers = "1234567890"
var special = "'!@#$%^&*()_+{}:<>?/[]'"

// refering to generate button 
var generateBtn = document.querySelector("#generate");

// defining generatePassword function
function generatePassword() {
  // creating empty variables within the scope of this function
  var password = ''
  var passwordCharacterHolder = ''

  // prompting user for a length
  var pwdLength = prompt("Between 8 and 128 how many characters would you like your password to contain?")
  // checking to make sure length is between 8 and 128 characters
  while (pwdLength < 8 || pwdLength > 128) {
    alert('Password must be a number between 8 and 128')
    pwdLength = prompt("Between 8 and 128 how many characters would you like your password to contain?")
  }
  // Comfirming that we are using Uppercase, Lowercase, Numbers, and Special Characters 
  var wantsUpper = confirm('Would you like uppercase letters?')
  var wantsLower = confirm('Would you like lowercase letters?')
  var wantsNumbers = confirm('Would you like numbers?')
  var wantsSpecial = confirm('Would you like special characters?')
// ALert conformation that you must choose one character type
  while (!wantsUpper && !wantsLower && !wantsNumbers && !wantsSpecial) {
    alert('You must choose at least one character type')
    wantsUpper = confirm('Would you like uppercase letters?')
    wantsLower = confirm('Would you like lowercase letters?')
    wantsNumbers = confirm('Would you like numbers?')
    wantsSpecial = confirm('Would you like special characters?')
  }
  // if they want a certain character then add it to the passwordCharacterHolder variable
  if (wantsUpper) {
    passwordCharacterHolder += upper
  }
  if (wantsLower) {
    passwordCharacterHolder += lower
  }
  if (wantsNumbers) {
    passwordCharacterHolder += numbers
  }
  if (wantsSpecial) {
    passwordCharacterHolder += special
  }

  console.log(passwordCharacterHolder)
  // for loop is running the code for as many times as the length is that the user has chosen
  for (var i = 0; i < pwdLength; i++) {
    // adding a character at random from our passwordcharacterholder into our password variable
    password += passwordCharacterHolder.charAt(Math.floor(Math.random() * passwordCharacterHolder.length))
  }
  // returning our new password
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