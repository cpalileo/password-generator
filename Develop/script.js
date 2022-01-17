// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

const lowerChar = "abcdefghijklmnopqrstuvwxyz";
const upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericChar = "0123456789";
const specialChar = "!@,#$%&*{}[]/\\+=";

welcome();

// Welcome screen
function welcome() {
  window.alert("Welcome to your personal password generator.");
  selectLength();
}

// Prompt user for length and character types
function selectLength() {
  const length = window.prompt(
    "How long would you like your password to be? (Select 8 - 128)"
  );
  if (length >= 8 && length <= 128) {
    result = Number(length);
    selectOptions(result);
  } else {
    window.alert("Sorry friend, please choose a value between 8 - 128");
    selectLength();
  }
}

function selectOptions(length) {
  lowerOption = window.confirm("Use lower case characters?");
  upperOption = window.confirm("Use upper case characters?");
  numericOption = window.confirm("Use numeric characters?");
  specialOption = window.confirm("Use special characters?");
  if (!lowerOption && !upperOption && !numericOption && !specialOption) {
    window.alert(
      "Pardon me but you must select at least one type of character."
    );
    selectOptions(length);
  } else {
    var possibleCharacters = "";

    if (lowerOption) {
      possibleCharacters = possibleCharacters + lowerChar;
    }
    if (upperOption) {
      possibleCharacters = possibleCharacters + upperChar;
    }
    if (numericOption) {
      possibleCharacters = possibleCharacters + numericChar;
    }
    if (specialOption) {
      possibleCharacters = possibleCharacters + specialChar;
    }

    var password = "";

    for (var i = 0; i < length; i++) {
      var characterIndex = Math.floor(
        Math.random() * possibleCharacters.length
      );

      // charAt treats string as an array
      var randomCharacter = possibleCharacters.charAt(characterIndex);

      // takes password var adds the randomCharacter and saves it to the exiting password variable
      password = password + randomCharacter;
    }
    // console.log(password);
    // console.log(possibleCharacters.charAt(characterIndex));
  }
}
// Generates password
function generatePassword() {
  var passwordCreated = password;
  return passwordCreated;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
