const inputNumber = document.getElementById("number")
const convertButton = document.getElementById("convert-btn")
const outputMessage = document.getElementById("output")

const convertNum = (num) => {
  const romanMap = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" }
  ];

  let roman = "";

  for (let i of romanMap) {
    while (num >= i.value) {
      roman += i.numeral
      num -= i.value
    }
  }
    
  return roman;
}

convertButton.addEventListener("click", () => {
  if (inputNumber.value === "") {
    outputMessage.innerText = "Please enter a valid number"
  } else if (inputNumber.value <= "0") {
    outputMessage.innerText = "Please enter a number greater than or equal to 1"
  } else if (inputNumber.value >= 4000) {
    outputMessage.innerText = "Please enter a number less than or equal to 3999"
  } else {
    outputMessage.innerText = convertNum (inputNumber.value)
  }
})