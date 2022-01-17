// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var charArr = [];
var passArr = [];
var lowerCharacter;
var upperCharacter;
var numericCharacter;
var specialCharacter;
var length;

// Welcome screen
function welcome() {
  window.alert("Welcome to your personal password generator.");
  selectLength();
}

welcome();

// Prompt user for length and character types
function selectLength() {
  const length = window.prompt(
    "How long would you like your password to be? (Select 8 - 128)"
  );
  if (length >= 8 && length <= 128) {
    result = Number(length);
    selectCharacters();
  } else {
    window.alert("Sorry friend, please choose a value between 8 - 128");
    selectLength();
  }
}

function selectCharacters() {
  lowerCharacter = window.confirm("Use lower case characters?");
  upperCharacter = window.confirm("Use upper case characters?");
  numericCharacter = window.confirm("Use numeric characters?");
  specialCharacter = window.confirm("Use special characters?");
  if (
    !lowerCharacter &&
    !upperCharacter &&
    !numericCharacter &&
    !specialCharacter
  ) {
    window.alert(
      "Pardon me but you must select at least one type of character."
    );
    selectCharacters();
  } else {
    randomNumber();
  }

  // Generate the random characters

  function randomNumber(min, max) {
    let range = max - min + 1;
    return Math.floor(Math.random() * range) + min;
  }
  let values = Array.from({ length: length }, () => randomNumber(0, 9));

  function randomLower(min, max) {
    range = max - min + 1;
    return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
  }
  values = Array.from({ length: length }, () => randomLower());

  function randomUpper(min, max) {
    range = max - min + 1;
    return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
  }
  values = Array.from({ length: length }, () => randomUpper());

  function randomSpecial(min, max) {
    range = max - min + 1;
    return String.fromCharCode(Math.floor(Math.random() * 14 + 33));
  }
  values = Array.from({ length: length }, () => randomSpecial());

  //excuse the formatting like this console log below. The extension I installed is a little off
  console.log(
    "Boolean values from character prompts" + length,
    lowerCharacter,
    upperCharacter,
    numericCharacter,
    specialCharacter
  );
}

// FROM ADVICE
//array that will contain all characters the user selects

// var charactersForPassword = [
//   randomLower ? [randomLower] : [],
//   randomUpper ? [randomUpper] : [],
//   randomNumber ? [randomNumber] : [],
//   randomSpecial ? [randomSpecial] : [],
// ];

// console.log(charactersForPassword);

// //if user selected special Characters
// charactersForPassword.concat(specialCharactersArray);

// // if user selected numbers
// charactersForPassword.concat(numbersArray);

// //if user selected lower
// charactersForPassword.concat(lowerArray);

// //if user selected upper
// charactersForPassword.concat(upperCharactersArray);

function randomizedChars() {
  if (lowerCharacter) {
  }
}

// //declare password string variable that will hold your password
// var passwordString = "";

// //loop the number of times that user wants their password length
// for (let i = 0; i < userSelectedPasswordLength; i++) {
//   var randomCharcter = (passwordString += randomCharcter); //GEt a random character from charactersForPassword
// }

// return passwordString;
password = "passwordString";
// //END FROM ADVICE

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

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
