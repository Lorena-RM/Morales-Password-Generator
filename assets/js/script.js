// Assignment Code
var generateBtn = document.querySelector("#generate");

//setting up my arrays to generate random password
const upperCaseArray =[
  "A","B","C","D","E","F","G","H","I","J","K","L","M", "N", "O", "P","Q","R","S","T","U","V","W","X","Y","Z",
]

const lowerCaseArray =[
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
]

const numberArray =[
  "0","1","2","3","4","5","6","7","8","9",
]

const specialCharacArray =[
  "!","@","#","$","%","&","*","?","~",
]

//first attempt at code
function generatePassword () {
  upperCase = confirm("Would you like Upper Case Characters in your password?");
  lowerCase = confirm("Would you like lower Case Characters in your password?");
  numbers = confirm("Would you like number Characters in your password?");
  special = confirm("Would you like Special Characters in your password?")
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
