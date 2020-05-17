// GLOBAL VARIABLES
var characterType = [
  {type: "lowercase", 
  indicator: 0,
  characters: "abcdefghijklmnopqrstuvwxyz"},
  {type: "uppercase", 
  indicator: 0,
  characters: "ABCDEFGHIJKLMNOPQRSTUVWXYZ"},
  {type: "number", 
  indicator: 0,
  characters: "0123456789"},
  {type: "special", 
  indicator: 0,
  characters: "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"}];

var passlength;
var passcharacters;

// PASSWORD LENGTH
var PasswordLength = function() {
  // Prompt user to input length of password (between 8 and 128 charcters). If user input is outside of range, prompt again.
  passlength = window.prompt('How many characters should the password be? (Between 8 and 128)');

  // Conditional Recursive Function Call
  if (passlength < 8 || passlength > 128 || passlength === "" || passlength === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return PasswordLength();
  }
}

// CHARACTER PROMPTS
var promptCharacters = function() {
  //Reset global values
  characterType[0].indicator = 0;
  characterType[1].indicator = 0;
  characterType[2].indicator = 0;
  characterType[3].indicator = 0;
  passcharacters = "";

  for (var i = 0; i < characterType.length; i++) {
    var pickedCharObj = characterType[i];

    // Prompt user to identify character types.
    var selection = window.prompt('Should the password include ' + pickedCharObj.type + ' characters? Please enter "Yes" or "No"');

    // Conditional Recursive Function Call
    if (selection.toLowerCase() === "yes"){
      pickedCharObj.indicator +=1;
      passcharacters += pickedCharObj.characters;
      window.alert('You selected yes.');
    } else if (selection === "no"){
      pickedCharObj.indicator += 0;
      window.alert('You selected no.');
    } else{
      window.alert("You need to provide a valid answer! Please try again.");
      return promptCharacters(); // would be useful to not return to the beginning of the prompts but to start at the place it broke
    }
  }  
  // Determine if at least one character type should was selected.
  var alltypes = characterType[0].indicator + characterType[1].indicator + characterType[2].indicator + characterType[3].indicator;

  if (alltypes > 0){
    window.alert("Thank you for your input. Now, let's generate your new, random password.")
  } else {
    window.alert("Please select at least one character type.");
    return promptCharacters();
  }
}

// Generate Password
var generatePassword = function() {
  includeChar = passcharacters.split('');
  var randomPassword = "";
  for (var i = 0; i < passlength; i++){
    randomPassword += includeChar[Math.floor(Math.random() * includeChar.length)]
  }
  return randomPassword;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// PROCESS FUNCTION
var writePassword = function() {
  // Prompt users they are about to create a new password.
  window.alert("You are about to generate a random password, but first, let's gather some more information about the password.");

  // Prompt user to input length of password.
  PasswordLength();

  // Prompt user to input character types.
  promptCharacters();

  // Generate password
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
  
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);