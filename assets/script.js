// GLOBAL VARIABLES
var characterType = [
  {type: "lowercase", indicator: 0},
  {type: "uppercase", indicator: 0},
  {type: "numchar", indicator: 0},
  {type: "specchar", indicator: 0}];

 var passlength; 
 var includeChar;

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

// CHARACTER PROMPTS
var promptCharacters = function() {
  for (var i = 0; i < characterType.length; i++) {
    var pickedCharObj = characterType[i];
    
    // Prompt user to identify any lowercase characters.
    var selection = window.prompt('Should the password include ' + pickedCharObj.type + ' characters? Please enter "Yes" or "No"');

    // Conditional Recursive Function Call
    if (selection.toLowerCase() === "yes"){
      window.alert('You selected YES.');
      pickedCharObj.indicator +=1;
    } else if (selection === "no"){
      window.alert('You selected NO.');
    } else{
      window.alert("You need to provide a valid answer! Please try again.");
      return promptCharacters(); // would be useful to not return to the beginning of the prompts but to start at the place it broke
    }
  }  
}

// Generate Password
var generatePassword = function() {
  //use if else to determine character strings to include

  if (characterType[1].indicator === 1 && characterType[2].indicator === 1 && characterType[3].indicator === 1) {           // Lower, Upper, Numeric, and Special
    var includeChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if (characterType[1].indicator === 1 && characterType[2].indicator === 1 && characterType[3].indicator === 1) {    // Upper, Numeric, and Special  
    var includeChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if (characterType[0].indicator === 1 && characterType[1].indicator === 1 && characterType[2].indicator === 1) {    // Lower, Upper, and Numeric
    var includeChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  } else if (characterType[0].indicator === 1 && characterType[2].indicator === 1 && characterType[3].indicator === 1) {    // Lower, numeric, and Special
    var includeChar = "abcdefghijklmnopqrstuvwxyz0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if (characterType[0].indicator === 1 && characterType[1].indicator === 1 && characterType[3].indicator === 1) {    // Lower, Upper, and Special
    var includeChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if (characterType[0].indicator === 1 && characterType[1].indicator === 1) {                                        // Lowercase and Uppercase
    var includeChar = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if (characterType[0].indicator === 1 && characterType[2].indicator === 1) {                                        // Lowercase and Numeric
    var includeChar = "abcdefghijklmnopqrstuvwxyz0123456789";
  } else if (characterType[0].indicator === 1 && characterType[3].indicator === 1) {                                        // Lowercase and Special
    var includeChar = "abcdefghijklmnopqrstuvwxyz!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if (characterType[1].indicator === 1 && characterType[2].indicator === 1) {                                        // Uppercase and Numeric
    var includeChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  } else if (characterType[1].indicator === 1 && characterType[3].indicator === 1) {                                        // Uppercase and Special
    var includeChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if (characterType[2].indicator === 1 && characterType[3].indicator === 1) {                                        // Numeric and Special
    var includeChar = "0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  } else if (characterType[0].indicator === 1) {                                                                            // Lowercase
    var includeChar = "abcdefghijklmnopqrstuvwxyz";
  } else if (characterType[1].indicator === 1) {                                                                            // Uppercase
    var includeChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  } else if (characterType[2].indicator === 1) {                                                                            // Numeric
    var includeChar = "0123456789";
  } else {                                                                                                                  // Special
    var includeChar = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }

  console.log(includeChar)
}




// PROCESS FUNCTION
var mainRun = function() {
  // Prompt users they are about to create a new password.
  window.alert("You are about to generate a random password, but first, let's gather some more information about the password.");

  // Prompt user to input length of password.
  PasswordLength();

  // Prompt user to input character types.
  promptCharacters();

  // Determine if at least one character type should was selected.
  var alltypes = characterType[0].indicator + characterType[1].indicator + characterType[2].indicator + characterType[3].indicator;

  if (alltypes > 0){
    window.alert("Thank you for your input. Now, let's generate your new, random password.")     // would be useful to prompt the types where indicators were greater than 1.
  } else {
    window.alert("Please select at least one character type.");
    return mainRun();
  }

  // Generate password
  generatePassword();
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