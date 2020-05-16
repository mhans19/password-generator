// GLOBAL VARIABLES
var lowerindicator = 0;
var upperindicator = 0;
var numindicator = 0;
var specindicator = 0;

// PASSWORD LENGTH
var PasswordLength = function() {
  // Prompt user to input length of password (between 8 and 128 charcters). If user input is outside of range, prompt again.
  var passlength = window.prompt('How many characters should the password be? (Between 8 and 128)');

  // Conditional Recursive Function Call
  if (passlength < 8 || passlength > 128 || passlength === "" || passlength === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return PasswordLength();
  }
}

// LOWERCASE CHARACTERS
var LowerCase = function() {
  // Prompt user to identify any lowercase characters.
  var lowercase = window.prompt('Should the password include lowercase characters? Please enter "Yes" or "No"');

  // Change input to lowercase
  lowercase = lowercase.toLowerCase();

  // Conditional Recursive Function Call
  if (lowercase === "yes"){
    lowerindicator++;
  } else if (lowercase === "no"){
    return true;
  } else{
    window.alert("You need to provide a valid answer! Please try again.");
    return LowerCase();
  }
}

// UPPERCASE CHARACTERS
var UpperCase = function() {
  // Prompt user to identify any lowercase characters.
  var uppercase = window.prompt('Should the password include uppercase characters? Please enter "Yes" or "No"');

  // Change input to lowercase
  uppercase = uppercase.toLowerCase();

  // Conditional Recursive Function Call
  if (uppercase === "yes"){
    upperindicator++;
  } else if (uppercase === "no"){
    return true;
  } else{
    window.alert("You need to provide a valid answer! Please try again.");
    return UpperCase();
  }
}

// NUMERIC CHARACTERS
var NumChar = function() {
  // Prompt user to identify any lowercase characters.
  var numchar = window.prompt('Should the password include numeric characters? Please enter "Yes" or "No"');

  // Change input to lowercase
  numchar = numchar.toLowerCase();

  // Conditional Recursive Function Call
  if (numchar === "yes"){
    numindicator++;
  } else if (numchar === "no"){
    return true;
  } else{
    window.alert("You need to provide a valid answer! Please try again.");
    return NumChar();
  }
}

// SPECIAL CHARACTERS
var SpecChar = function() {
  // Prompt user to identify any lowercase characters.
  var specchar = window.prompt('Should the password include special characters? Please enter "Yes" or "No"');

  // Change input to lowercase
  specchar = specchar.toLowerCase();

  // Conditional Recursive Function Call
  if (specchar === "yes"){
    specindicator++;
  } else if (specchar === "no"){
    return true;
  } else{
    window.alert("You need to provide a valid answer! Please try again.");
    return SpecChar();
  }
}

// PROCESS FUNCTION
var mainRun = function() {
  // Prompt users they are about to create a new password.
  window.alert("You are about to generate a random password, but first, let's gather some more information about the password.");

  // Prompt user to input length of password.
  PasswordLength();

  // Prompt user to input character types.
  LowerCase();
  UpperCase();
  NumChar();
  SpecChar();

  // Determine if at least one character type should was selected.
  var alltypes = lowerindicator + upperindicator + numindicator + specindicator

  if (alltypes > 0){
    "Thank you for your input."
  } else {
    window.alert("Please select at least one character type.");
    return mainRun();
  }
}

// CALL FUNCTION
mainRun();

// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");

// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);