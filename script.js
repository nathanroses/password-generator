//MAIN PASSWORD COMPONENTS
   
    //Upper Case 
    upletter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K" , "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    //Lower Case

    //Character 

    //Number



//INPUT VARIABLES
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
//END INPUT VARIABLES


//GENERATING PASSWORD

  function generatePassword() {

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