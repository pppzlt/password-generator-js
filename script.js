// Assignment Code
var generateBtn = document.querySelector("#generate");
//global variable
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numbers = '0123456789';
var symbols = '~`!@#$%^&*()-_=+{[}]|;:,<.>/?';
const array = [lowercase, uppercase, numbers, symbols];
var pLength; //password length
var pLower = false;
var pUpper = false;
var pNumber = false;
var pSymbol = false;
const type = [pLower, pUpper, pNumber, pSymbol];
var poll = '';
var actualPassword = '';


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {

  input();
  randomPassword();
  return actualPassword;
}

function input() {
  //get length input
  pLength = window.prompt('How long do you want this password to be? (between 8 and 128)');
  // check if inpt is a number
  while (isNaN(pLength)) {
    window.alert('Input must be a number')
    pLength = window.prompt('How long do you want this password to be? (between 8 and 128)');
  }
  // check if input is between 8 and 128
  while (pLength < 8 || pLength > 128) {
    window.alert('Invalid password length');
    pLength = window.prompt('How long do you want this password to be? (between 8 and 128)');
  }
  

  //get options input
  while (!type[0] && !type[1] && !type[2] && !type[3]) {
    type[0] = window.confirm('Do you want lowercase letters in the password?');
    type[1] = window.confirm('Do you want uppercase letters in the password?');
    type[2] = window.confirm('Do you want numbers in the password?');
    type[3] = window.confirm('Do you want symbols in the password?');
    //validate if all options are false
    if (!type[0] && !type[1] && !type[2] && !type[3]) {
      alert('Invalid input, at least one character');
    }
  }
}

function randomPassword() {
  for (let i = 0; i < 4; i++) {
    if (type[i]) {
      poll += array[i];
    }
  }
  //reset actualPassword everytime
  actualPassword = '';
  //generate the real password
  for (let i = 0; i < pLength; i++) {
    actualPassword += poll.charAt(Math.floor(Math.random() * poll.length));
  }
  //reset options everytime
  for (let i = 0; i < type.length; i++) {
    type[i] = false;
  }
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
