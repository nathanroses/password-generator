//MAIN PASSWORD COMPONENTS
   
    //Upper Case 
    upletter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K" , "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    //Lower Case
    lowerletter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K" , "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    //Character 
    character = ["?", "%", "!", "@", "#", "$", "&", "*",];
    //Number
    number = ["1", "2", "3", "4", "5", "6", "7", "8", "9",];


    var choices;
//INPUT VARIABLES
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
//END INPUT VARIABLES


//GENERATING PASSWORD

  function generatePassword() {
      //PROMPT to ASK for 8 - 128  
      enter = parseInt(prompt("Please Choose Between 8 to 128 random characters to be in your password."));
      //PROMPT if NO input VALUE
      if (!enter) {
          alert("VALUE IS MISSING!");
      } else if (enter < 8 || enter > 128) {
       enter = parseInt(prompt("Your MUST choose between 8 and 128"));
     
    
    } else {
        confirmUppercase =
        confirmLowercase =
        confirmCharacter =
        confirmNumber =
    }
 
 
 
    }








// Assignment code here
function writePassword() {

    var password = generatePassword();
  var passwordText = document.querySelector("#password");}








// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);