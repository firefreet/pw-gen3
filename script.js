// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var copyBtn = document.querySelector("#copyBtn");


function generatePassword(){
  var validLength = false;
  var passLength = "";
  var upperLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerLetters = "abcdefghijklmnopqrstuvwxyz";
  var nums = "0123456789";
  var special = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var charList = "";
  var newPassword = "";
  var passUpper = false;
  var passLower = false;
  var passNumbers = false;
  var specialChar = false;
  while (validLength === false && passLength !== null) {
      passLength  = prompt("Enter desired password length. Must be between 8 and 128 characters");
      if (typeof(parseInt(passLength,10)) === "number" &&  passLength > 7 && passLength < 129) {
        validLength = true
        while (passNumbers === false && passUpper === false && passLower === false && specialChar === false) {
            alert("At least one of the four character types must be included: Numbers, Uppercase letters, Lowecase letters, Special characters.")
            passNumbers = confirm("Press Ok to include -- NUMBERS --. Cancel to exclude")
            passUpper = confirm("Press Ok to include -- UPPERCASE chars --. Cancel to exclude")
            passLower = confirm("Press Ok to include -- lowercase chars --. Cancel to exclude")
            specialChar = confirm("Press Ok to include -- special characters --. Cancel to exclude")        
        }
        if (passNumbers === true) {
            charList += nums;
        }
        if (passUpper === true) {
            charList += upperLetters;
        }
        if (passLower === true) {
            charList += lowerLetters;
        }
        if (specialChar === true) {
            charList += special;
        }
        for (var i = 1; i <= passLength; i++) {
            newPassword += charList.charAt(Math.floor(Math.random() * charList.length) +1);
        }
      } 
      else if (passLength !== null) {
      alert("Must be a number between 8 & 128. Please retry.")
      }
  }
  return newPassword
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  passwordText.value = password;
  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  passwordText.select();
  document.execCommand("copy");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// BONUS EVENT LISTENER
copyBtn.addEventListener("click", copyToClipboard);
