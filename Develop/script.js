// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Generates password
var generatePassword = function() {
  var passwordCreated = "TEMP PASSWORD";
  return passwordCreated;
}

// Generate the characters

// var randomLower() {

// }

// Confirms the use of various types of characters
var selectCharacters = function() {
  var lowerCharacter = window.confirm("Do you want to use lower case characters?  OK for 'yes' Cancel for 'no'")
  var upperCharacter = window.confirm("Do you want to use upper case characters?  OK for 'yes' Cancel for 'no'")
  var numericCharacter = window.confirm("Do you want to use numeric characters?  OK for 'yes' Cancel for 'no'")
  var specialCharacter = window.confirm("Do you want to use special characters?  OK for 'yes' Cancel for 'no'")
    if (lowerCharacter, upperCharacter, numericCharacter, specialCharacter === false) {
      window.alert("Pardon me but you must select at least one type of character.")
      selectCharacters()
    } else {
      generatePassword()
    }
}

// Password length prompt
var selectLength = function() {
  var characterLength = window.prompt("How long would you like your password to be? (Select 8 - 128)")
    if (characterLength >= 8 && characterLength <= 128) {
      result = Number(characterLength)
      selectCharacters()
    } else {
      window.alert("Sorry friend, please choose a value between 8 - 128")
      selectLength()
    }
}

// Welcome screen
var welcome = function() {
  window.alert("Welcome to your personal password generator.");
  selectLength()
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Starts password generator
welcome()
