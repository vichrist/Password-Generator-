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
var possChar = []; 

var specialChar = ["~", "`","!","@","#","$","%","^","&","*","(",")","_", "-","+","=","{","}","[", "]","|"]; 

var numbers = ["0","1","2","3","4","5","6","7","8","9"]; 
 
var lowCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]; 

var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]; 

var charNum;

//function & prompt for character lenth, if/else statement 
function getPassword () {
    var charLength = prompt("Choose password character length of 8 or more characters but no greater than 128 characters?");
    charNum = parseInt(charLength); 
    console.log("number of characters", charNum); 
    console.log("truth condition met?", charNum <8 || charNum >128);

    if (charNum <8 || charNum >128){ 
        alert("Password criteria not met, choose length between 8 & 128 characters"); 
        getPassword();
    } else {
        alert("Password criteria met.");  
    }    
}

getPassword(); 

//function & confirm for special character, if/else statement, for-looping and pushing  

function getSpecial () {
    var hasSpecial = confirm ("Click OK to confirm including special characters?"); 

    if (hasSpecial){
        console.log("Special characters included in password generator");  
    //add specialChar array to possChar array
        // var possChar = []
        // var specChar = [!,@,#,$]

    // concatention -> adding strings (or others) together (look up .concat())
        // possChar = possChar + specChart

    // loop and push
        for (char in specialChar) {
            possChar.push(char);
            console.log(hasSpecial);
        }
    } else {
        alert("password will not contain special characters");    
    }
}

getSpecial(); 



//function & confirm for numerical character, if/else statement 

function getNumbers () { 
    var hasNumbers = confirm ("Click OK to confirm including numerical characters?"); 

    if (hasNumbers){
        console.log("Numerical characters included in password generator"); 
        for (charNum in numbers) {
            possChar.push(charNum);
            console.log(hasNumbers);
        } 
    } else {
        alert("Password will not include numerical characters");   
    } 
}

getNumbers(); 



//confirm for lower case character, if/else statement 

function getLow () {
    var hasLow = confirm ("Click OK to confirm including lowcase characters?"); 

    if (hasLow){
        console.log("Lowcase characters included in password generator");      
        for (charLow in lowCase) {
            possChar.push(charLow);
            console.log(hasLow);
        }
    } else {
        alert("Password will not include lowcase characters."); 
    }
}

getLow (); 


//confirm for uppercase character, if/else statements 

function getUpper () {
    var hasUpper = confirm ("Click OK to confirm including uppercase characters?");

    if (hasUpper){
        console.log("Uppercase characters will be included in password generator"); 
        for (charUpper in upperCase) {
            possChar.push(charUpper);
            console.log(hasUpper);
        }
    } else {
        alert("Password will not include uppercase characters."); 
    }   
}

getUpper(); 


//generate random password  
var password =""; 

for (var i = 0; i < charNum ; i++) {
    var num = Math.random(); 
    var randomIndex = Math.floor(num * possChar.length); 
    password = password + possChar[randomIndex]; 
    console.log(password); 
} 


    // generate random number
    // var num = Math.random(); 0 -> 0.99999
    // var randomIndex = Math.floor(num * possChar.length);
    // produce a random element from the possChar array (possChar[num]);
// }
