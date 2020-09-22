// variable assigned to the generate ID so that we can call/execute the event listener hwen clicked 
var generateBtn = document.querySelector("#generate"); 

// function that will write the password 
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// function that will generate the passwor 

function generatePassword() {

// variable list of arrays 
var possChar = []; 

var specialChar = ["~", "`","!","@","#","$","%","^","&","*","(",")","_", "-","+","=","{","}","[", "]","|"]; 

var numbers = ["0","1","2","3","4","5","6","7","8","9"]; 
 
var lowCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 

var password = '';

// do-while loop, prompts and confirms along with if/else statements 

do {
    charLength = prompt("Choose password character length of 8 or more characters but no greater than 128 characters?");
    console.log("number of characters", charLength); 
    console.log("truth condition met?", charLength <8 || charLength >128);
    if (charLength === null) {
        return '';
    } 
} while (charLength < 8 || charLength > 128);

if (confirm ("Click OK to include special characters?")) {
    for (i=0; i<specialChar.length; i ++) {
        possChar.push(specialChar[i]);
    }
}

if (confirm ("Click OK to confirm including numerical characters?")) {
    for (i=0; i<numbers.length; i ++) {
        possChar.push(numbers[i]); 
    } 
} 

if (confirm ("Click OK to confirm including uppercase characters?")) {
    for (i=0; i<upperCase.length; i ++) {
        possChar.push(upperCase[i]); 
    } 
} 

if (confirm ("Click OK to confirm including lowcase characters?"))  {
    for (i = 0; i<lowCase.length; i ++) {
        possChar.push(lowCase[i]); 
    }
}  


//for loop to generate the random password
    
for (var i = 0; i < charLength; i++) {
     
    var random = Math.floor(Math.random() * possChar.length); 
    
    password += possChar[random];

    } 
    return password; 
}

// event listener to fire off the write password function 
generateBtn.addEventListener("click", writePassword);