// Assignment code here
var password = document.querySelector("#password");
var passwordLength = document.querySelector("#passwordLength");
var lowerCase = document.querySelector("#lowerCase");
var upperCase = document.querySelector("#upperCase");
var numbers = document.querySelector("#numbers");
var specialCharacters = document.querySelector("#specialCharacters");
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#copy");

//Creats an array to place each type of character
const randomFunction = {
  lower:getRandomLower,
  upper: getRandomUpper,
  num: getRandomNumber,
  special: getRandomSpecial
};

//Evaluates which options are checked by user
generateBtn.addEventListener('click', () => {
  const length = +passwordLength.value; //+ is to make string into number
  const hasLower = lowerCase.checked;
  const hasUpper = upperCase.checked;
  const hasNum = numbers.checked;
  const hasSpec = specialCharacters.checked;

  password.innerText = generatePassword(length, hasLower, hasUpper, hasNum, hasSpec);
});

//copies generated password to clipboard
// thank you https://hackernoon.com/copying-text-to-clipboard-with-javascript-df4d4988697f
copyBtn.addEventListener('click', () => {
  console.log(password.innerText);
  // const textArea = document.createElement('text');
  
  // if(!password) {
  //   return;
  // }

  // textArea.value = 
  // document.body.appendChild(textArea);
  // textArea.select();
  // document.execCommand('copy');
  // textArea.remove();

})

// generator function
function generatePassword(length, lower, upper, num, special) {
  let generatedPassword = '';
   
  //checkes how many values are checked
  const typesCount = lower + upper + num + special;

  //filters out unchecked types
  const typesArr = [{lower}, {upper}, {num}, {special}].filter(
    item => Object.values(item)[0]
  );

  //returns nothing if no boxes are clicked
  if(typesCount === 0){
    return ' ';
  }

  // loops through all the types of characters
  for(let i = 0; i < length; i += typesCount) {
    typesArr.forEach(type => {
      const func = Object.keys(type)[0];

      generatedPassword += randomFunction[func]();
    });
  }
  const finalPassword = (generatedPassword.slice(0, length));
  return finalPassword;
}

//Random character functions

function getRandomLower() {
  // gets random lowercase character from Character Codes, 26 represents letters in the alphabet and the '+97' puts the random numbers in the correct range for lower case
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
  // similar to getRandomLower, but in range for upper case
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
  // similar to getRandomLower, but in range for numbers 0-9
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSpecial() {
  const symbols = '!@#$%^&*()_+-={}[]\|;:,./?~`<>';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

// // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  passwordText.value = password;

}