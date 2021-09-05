

function generatePassword(passwordLength) {
    var upperCh ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowerCh = "abcdefghijkflmnopqrstuvwxyz";
    var numberch = "123456789";
    
    var allChars = numberch + lowerCh + upperCh;
    var randPasswordArry = Array(passwordLength);
    randPasswordArry[0] = numberch;
    randPasswordArry[1] = upperCh;
    randPasswordArry[2] = lowerCh;
    randPasswordArry = randPasswordArry.fill(allChars, 7)
    return shuffleArray(randPasswordArry.map(function(x) { return x[Math.floor(Math.random() * x.length)] })).join('');
}

// SHUFFLE

function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}

  password(generatePassword (22));


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);