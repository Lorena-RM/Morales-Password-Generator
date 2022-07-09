// Assignment Code
var generateBtn = document.querySelector("#generate");

//setting up my arrays to generate random password
const upperCaseArray =[
  "A","B","C","D","E","F","G","H","I","J","K","L","M", "N", "O", "P","Q","R","S","T","U","V","W","X","Y","Z",
];

const lowerCaseArray =[
  "a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"
];

const numbersArray =[
  0,1,2,3,4,5,6,7,8,9
];

const specialArray =[
  "!","@","#","$","%","&","*","?","~",
];

//pushes final password into this variable
let password = [];

//this blank passwordArray variable is used so if user wants upper,lower,numer,or special chars in their password it will get added into this variable
let passwordArray = [];

//1st function begins with deciding how many chars is in your password. using the (IF) statement if the data passes the condition of &&, it will continue on to the rest of the funtion.
//IF it doesnt (say choosing a number outside of 6 and 30, then js will ignore that funtion and continue to the (ELSE) statement.)
function generatePassword () {
  passwordLength = prompt("How Many Characters Would You Like in your Password?");
  console.log(passwordLength);


  if (passwordLength > 5 && passwordLength < 31){
    upperCase = confirm("Would you like to use Upper Case Characters in your password?");
    console.log(upperCase);
    lowerCase = confirm("Would you like to use lower Case Characters in your password?");
    console.log(lowerCase);
    numbers = confirm("Would you like to use number Characters in your password?");
    console.log(numbers);
    special = confirm("Would you like to use Special Characters in your password?");
    console.log(special);

    if (upperCase === true) {
      passwordArray = passwordArray.concat(upperCaseArray);
    }
    if (lowerCase === true){
      passwordArray = passwordArray.concat(lowerCaseArray);
    }
    if (numbers === true) {
      passwordArray = passwordArray.concat(numbersArray);
    }
    if (special === true) {
      passwordArray = passwordArray.concat(specialArray);
    }
    for (let index = 0; index < passwordLength; index++) {
      password.push(passwordArray[Math.floor(Math.random() * passwordArray.length)]);
    }

  } else {
    //the condition that will run if choosing numbers outside of 6 and 30
    alert("please choose a character length between 6 and 30")
  }

  return password
}


// Write password to the #password input
function writePassword() {
  var passwordDisplay = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = passwordDisplay;

  password = [];
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
