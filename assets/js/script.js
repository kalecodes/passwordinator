// Assignment code here
const lowAlpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const capAlpha = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const special = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?", "~"];
var usableCharacters = [];
var password = " ";

function generatePassword() {
  var passwordLength = prompt("Please choose a password length between 8 and 128 characters.");
  if (passwordLength >= 8 && passwordLength <= 128) {
    console.log(passwordLength);
  } else {
    alert('Please choose a valid password length between 8 & 128 characters.  Please click the "Generate Password" button again to restart and try again.')
    return '';
  }

  var promptCap = confirm('Do you wish to include capital letters (A-Z) in your password? Please select "OK" for YES or "Cancel" for NO.');
  var promptLow = confirm('Do you wish to include lower case letters (a-z) in your password? Please select "OK" for YES or "Cancel" for NO.');
  var promptNumeric = confirm('Do you wish to include numeric values (0-9) in your password? Please select "OK" for YES or "Cancel" for NO.');
  var promptSpecial = confirm('Do you wish to include special characters in your password? Please select "OK" for YES or "Cancel" for NO.');

  if (promptCap) {
    usableCharacters += capAlpha.join('')
    console.log('Capital letters selected')
  };

  if (promptLow) {
    usableCharacters += lowAlpha.join('')
    console.log('Lower case letters selected')
  };

  if (promptNumeric) {
    usableCharacters += num.join('')
    console.log('Numeric values selected')
  }; 

  if (promptSpecial) {
    usableCharacters += special.join('')
    console.log('Special characters selected')
  };

  if (!promptSpecial && !promptCap && !promptLow && !promptNumeric) {
    return alert ('You must select at least one criteria! Please start again.')
  };

  console.log(usableCharacters);

  for (let i = 0; i < passwordLength; i++) {
    password += usableCharacters[Math.floor(Math.random () * usableCharacters.length)];
  }
  return password;
}

// Get references to the #generate element
var generateBtn = document.getElementById("generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.getElementById("password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
