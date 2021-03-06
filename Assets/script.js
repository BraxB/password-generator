// Assignment Code
var generateBtn = document.querySelector("#generate");

const uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const special = [" ", "!", '"', "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "]", "\\", "]", "^", "_", "`", "{", "|", "}", "~"]
const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

function generatePassword(characters, upperConfirm, lowerConfirm, numbersConfirm, specialConfirm) {
  availChars = [];

  // add uppercase letters to array of available characters if the user confirms
  if (upperConfirm === true) {
    availChars = availChars.concat(uppercase);
  }

  // add lowercase letters to array of available characters if the user confirms
  if (lowerConfirm === true) {
    availChars = availChars.concat(lowercase);
  }

  // add numbers to array of available characters if the user confirms
  if (numbersConfirm === true) {
    availChars = availChars.concat(numbers);
  }

  // add symbols to array of available characters if the user confirms
  if (specialConfirm === true) {
    availChars = availChars.concat(special);
  }

  var password = "";
  
  for (i = 0; i < characters; i++) {
    let randIndex = Math.floor(Math.random() * availChars.length);
    password = password + availChars[randIndex];
  }

  return password;  
}

// Write password to the #password input.
function writePassword() {
  var characters = prompt("How many characters would you like your password?");
  var upperConfirm = confirm("Include uppercase letters?");
  var lowerConfirm = confirm("Include lowercase letters?");
  var numbersConfirm = confirm("Include numbers?");
  var specialConfirm = confirm("Include special characters?");

  var password = generatePassword(characters, upperConfirm, lowerConfirm, numbersConfirm, specialConfirm);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
