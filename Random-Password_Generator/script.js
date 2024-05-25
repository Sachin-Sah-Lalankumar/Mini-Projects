const passBox = document.getElementById("password");
const length = 10;
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";
const specialSymbol = "~!@#$%^&*_+-[]{}|<>,./?";

const allChars = upperCase + lowerCase + number + specialSymbol;

function creatrePass() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += number[Math.floor(Math.random() * number.length)];
  password += specialSymbol[Math.floor(Math.random() * specialSymbol.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }
  passBox.value = password; //to display
}
function copyPass() {
  passBox.select(); //to select
  document.execCommand("copy"); //command for copy
}
