const userInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");

const validateInput = () => {
  const phoneRegex = /^1?\s?(\(\d{3}\)|\d{3})\s?-?\d{3}\s?-?\d{4}$/;
  if (userInput.value === "") {
    alert("Please provide a phone number")
  } else if (phoneRegex.test(userInput.value)) {
    resultsDiv.innerHTML = `Valid US number: ${userInput.value}`
  } else {
    resultsDiv.innerHTML = `Invalid US number: ${userInput.value}`
  }
}

checkBtn.addEventListener("click", validateInput)
clearBtn.addEventListener("click", () => {
  resultsDiv.innerHTML = "";
  userInput.value = "";
})
