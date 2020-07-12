// Assignment Code
var generateBtn = document.querySelector("#generate"); 

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);



//my arrays 

var specialChar = ["~", "`","!","@","#","$","%","^","&","*","(",")","_", "-","+","=","{","}","[", "]","|"]; 

var numbers = ["0","1","2","3","4","5","6","7","8","9"]; 
 
var lowCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 


//prompt for character lenth, if/else statement  --need to figure out for all below how to allow user to enter character length or accept special, numerical, etc. if not chosen correctly 

var charLength = prompt("Choose password character length of 8 or more characters but no greater than 128 characters?")
var charNum = parseInt(charLength); 
console.log("number of characters", charNum); 
console.log("truth condition met?", charNum <8 || charNum >128); 


if (charNum <8 || charNum >128){ 
    alert("Password criteria not met, choose length between 8 & 128 characters"); 
    console.log("Password criteria is not met");
}
    else {
        alert("Password criteria met.");  
    } 


//confirm for special character, if/else statement 

var hasSpecial = confirm ("Click OK to confirm including special characters?"); 

if (hasSpecial){
    console.log("Special characters included in password generator"); 
}
else {
        alert("Choose OK to include special characters");   
}


//confirm for numerical character, if/else statement 

var hasNumbers = confirm ("Click OK to confirm including numerical characters?"); 

if (hasNumbers){
    console.log("Numerical characters included in password generator");  
}
    else {
        alert("Choose OK to include numerical characters"); 
    } 



//confirm for lower case character, if/else statement 

var hasLow = confirm ("Click OK to confirm including lowcase characters?"); 

if (hasLow){
    console.log("Lowcase characters included in password generator");  
}
    else {
        alert("Choose OK to include lowcase characters."); 
    }



//confirm for uppercase character, if/else statements 

var hasUpper = confirm ("Click OK to confirm including uppercase characters?");

if (hasUpper){
    console.log("Uppercase characters will be included in password generator"); 
}
else {
        alert("Choose OK to include uppercase characters."); 
}


