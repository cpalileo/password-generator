// Assignment code here

var selectOptions() {
   
}

// Welcome
// Length of password? 8 - 128 characters
// Select character types: lower, upper, numeric, special
//


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

welcome()