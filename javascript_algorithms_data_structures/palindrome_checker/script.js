const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const resultMessage = document.getElementById("result");

const isPalindrome = () => {
  const original = textInput.value.toLowerCase();
  const cleaned = original.replace(/[^a-z0-9]/g, "");
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

const resultPalindrome = () => {
  if (textInput.value === "") {
    alert("Please input a value")
  } else if (isPalindrome()) {
    resultMessage.innerText = `${textInput.value} is a palindrome`
  } else {
    resultMessage.innerText = `${textInput.value} is not a palindrome`
  }
}

checkButton.addEventListener("click", resultPalindrome);