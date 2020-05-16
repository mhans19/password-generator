var lowercase = 0
var uppercase = 0
var numchar = 0
var specchar = 0

var PasswordLength = function() {
  // Prompt user to input length of password (between 8 and 128 charcters). If user input is outside of range, prompt again.
  var passlength = window.prompt('How many characters should the password be? (Between 8 and 128)');

  // Conditional Recursive Function Call
  if (passlength < 8 || passlength > 128 || passlength === "" || passlength === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return PasswordLength();
  }
}

var LowerCase = function() {
  // Prompt user to identify any lowercase characters.
  var lowercase = window.prompt('Should the password include lowercase characters? Please enter "Yes" or "No"');

  // Change input to lowercase
  lowercase = lowercase.toLowerCase();

  // Conditional Recursive Function Call
  if (lowercase === "yes" || lowercase === "no"){
    return lowercase++
  } else{
    window.alert("You need to provide a valid answer! Please try again.");
    return LowerCase();
  }
}

var UpperCase = function() {
  // Prompt user to identify any lowercase characters.
  var uppercase = window.prompt('Should the password include uppercase characters? Please enter "Yes" or "No"');

  // Change input to lowercase
  uppercase = uppercase.toLowerCase();

  // Conditional Recursive Function Call
  if (uppercase === "yes" || uppercase === "no"){
    return uppercase++
  } else{
    window.alert("You need to provide a valid answer! Please try again.");
    return UpperCase();
  }
}

var NumChar = function() {
  // Prompt user to identify any lowercase characters.
  var numchar = window.prompt('Should the password include numeric characters? Please enter "Yes" or "No"');

  // Change input to lowercase
  numchar = numchar.toLowerCase();

  // Conditional Recursive Function Call
  if (numchar === "yes" || numchar === "no"){
    return numchar++
  } else{
    window.alert("You need to provide a valid answer! Please try again.");
    return NumChar();
  }
}

var SpecChar = function() {
  // Prompt user to identify any lowercase characters.
  var specchar = window.prompt('Should the password include special characters? Please enter "Yes" or "No"');

  // Change input to lowercase
  specchar = specchar.toLowerCase();

  // Conditional Recursive Function Call
  if (specchar === "yes" || specchar === "no"){
    return specchar++
  } else{
    window.alert("You need to provide a valid answer! Please try again.");
    return SpecChar();
  }
}


var StartCriteria = function() {
  // Prompt users they are about to create a new password.
  window.alert("You are about to generate a random password, but first, let's gather some more information about the password.");

  // Prompt user to input length of password.
  PasswordLength();

  // Prompt user to input character types.
  LowerCase();
  UpperCase();
  NumChar();
  SpecChar();

  debugger;
  }


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