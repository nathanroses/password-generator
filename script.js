//MAIN PASSWORD COMPONENTS
   
var generateBtn = document.querySelector("#generate");

//INPUT VARIABLES
var enter;
var confirmNumber;
var confirmCharacter;
var confirmUppercase;
var confirmLowercase;
//END INPUT VARIABLES


    //Upper Case 
    upletter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K" , "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    //Lower Case
    lowerletter = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K" , "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    //Character 
    character = ["?", "%", "!", "@", "#", "$", "&", "*", "=", "+", "-", "_", ">", "<",];
    //Number 
    number = ["1", "2", "3", "4", "5", "6", "7", "8", "9",];





var choices;

//GENERATING PASSWORD

  function generatePassword() {
      //PROMPT to ASK for 8 - 128  
      enter = parseInt(prompt("Please Choose Between 8 to 128 random characters to be in your password."));
      //PROMPT if NO input VALUE
      if (!enter) {
          alert("INPUT IS MISSING");
      } else if (enter < 8 || enter > 128) {
       enter = parseInt(prompt("Your MUST choose between 8 and 128"));
     
    
    } else {
        confirmUppercase = confirm("Will this contain Uppercase Letters?");
        confirmLowercase = confirm("Will this contain Lowercase Letters?");
        confirmCharacter = confirm("Will this contain Special Characters?");
         confirmNumber = confirm("Will this contain number?");
    };
    

      // MUST CHOOSE FROM 4 OPTIONS
      if (!confirmCharacter && !confirmLowercase && !confirmUppercase && !confirmNumber){
          choices = alert("Please choose from one of the options!");
      }

      
      //THE RESULT OF THE 1 to 4 OPTIONS CHOOSE

            //4 POSTIVES
            else if(confirmCharacter && confirmLowercase && confirmUppercase && confirmNumber) {
                  choices = character.concat(upletter, lowerletter, number, character);
             }
        
            //3 POSTIVES
            else if(confirmCharacter && confirmNumber && confirmLowercase) {
                choices = character.concat(number, lowerletter);
            } 
            else if(confirmCharacter && confirmNumber && confirmUppercase) {
                choices = character.concat(number, upletter);
            }
            else if(confirmNumber && confirmLowercase && confirmUppercase) {
                choices = number.concat(upletter, lowerletter);
            }
            else if(confirmCharacter && confirmUppercase && confirmLowercase) {
                choices = character.concat(upletter, lowerletter);
            }
            //2 POSTIVES
            else if (confirmCharacter && confirmNumber) {
                choices = character.concat(number);
            }
            else if (confirmCharacter && confirmLowercase) {
                choices = character.concat(lowerletter);
            }
            else if (confirmCharacter && confirmUppercase) {
                choices = character.concat(upletter);
            }
            else if (confirmNumber && confirmUppercase) {
                choices = number.concat(upletter);
            }
            else if (confirmLowercase && confirmUppercase) {
                choices = alpha.concat(upletter);
            }
            else if (confirmLowercase && confirmNumber) {
                choices = alpha.concat(number);
            }
           //1 POSTIVE
           else if (confirmCharacter) {
               choices = character;
           }
           else if (confirmLowercase) {
               choices = lowerletter;
           }
           else if (confirmNumber) {
               choices = number;
           }
    };




     //PASSWORD IN PLACE HOLDER
       var password = [];
     

    //GENERATE THE RANDOM SELECTOR
    for (var i = 0; i < enter; i++) {
        var pickChoices = choices[Math.floor(Math.random() * choices.length)];
        password.push(pickChoices);
    }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
   //END
   generateBtn.addEventListener("click", writePassword);

