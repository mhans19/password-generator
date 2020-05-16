// GLOBAL VARIABLES
var characterType = [
  {
    type: "lowercase",
    indicator: 0
  },
  {
    type: "uppercase",
    indicator: 0
  },
  {
    type: "numchar",
    indicator: 0
  },
  {
    type: "specchar",
    indicator: 0
  }];

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
      return promptCharacters();
    }
  }  
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
    window.alert("Thank you for your input, you selected: " + alltypes);
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