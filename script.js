function generatePassword(){
    //TODO: your code goes here

// assign Variables

var upperCaseList = ["A", "B", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numberList = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialList = ["!", "#", "$", "%", "&", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@"]
var finalPass = [];

// asks for password legnth
var passLegnth = window.prompt("Choose legnth of password from 8-128 characters");

// use while loop to make sure they have the correct number of characters
if (passLegnth < 8 || passLegnth > 128) {
while (passLegnth < 8 || passLegnth > 128) {
  passLegnth = window.prompt("Choose legnth of password from 8-128 characters");
}
}

// asks if password includes lowercase, uppercase, numeric, and/or special characters

var lowerCase = confirm("Include lowercase letters in your password?")
var upperCase = confirm("Include uppercase letters in your password?")
var numeric = confirm("Include numbers in your password?")
var special = confirm("Include special characters in your password?")

// make an array that has the parameters they chose and only those parameters

var userChoice = []; 

if (numeric === true) {
  userChoice.push(...numberList);
  finalPass.push((numberList [Math.floor(Math.random()*numberList.length)]))
  passLegnth --
}

// add in one number to finalpass into if statement 

if (lowerCase === true) {
  userChoice.push(...lowerCaseList);
  finalPass.push((lowerCaseList [Math.floor(Math.random()*lowerCaseList.length)]))
  passLegnth --
}

if (upperCase === true) {
  userChoice.push(...upperCaseList);
  finalPass.push((upperCaseList [Math.floor(Math.random()*upperCaseList.length)]))
  passLegnth --
}

if (special === true) {
  userChoice.push(...specialList);
  finalPass.push((specialList [Math.floor(Math.random()*specialList.length)]))
  passLegnth --
}

// function to pull a random item out of an array 

// for loop to put as many characters as they have asked for in their password 

for (var i = 0; i< passLegnth; i++ ) {
  finalPass.push(userChoice [Math.floor(Math.random()*userChoice.length)])
}


// join output as string
var generatePass = finalPass.join('');


// print password onto the page

    return generatePass;
  }

  
  
  // Assignment Code, DO NOT EDIT ANTHING  BELOW THIS LINE
  var generateBtn = document.querySelector("#generate");
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  