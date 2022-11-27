// Assignment code here
var password = document.querySelector("#password");
var passwordLength = document.querySelector("#passwordLength");
var lowerCase = document.querySelector("#lowerCase");
var upperCase = document.querySelector("#upperCase");
var numbers = document.querySelector("#numbers");
var specialCharacters = document.querySelector("#specialCharacters");
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

function generatePassword() {
  // gets desires password length
  // let passwordLength = prompt("How Long would you like your password to be? Please input a number between 8 - 124", 16);

}

// Get references to the #generate element


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
