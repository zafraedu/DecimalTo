"use strict";

const decInput = document.getElementById("decimal");
const binInput = document.getElementById("binary");
let errorMsg = document.querySelector(".msg-error");

//Convert decimal to binary when user inputsin the decimal field
decInput.addEventListener("input", () => {
  let decValue = parseInt(decInput.value);
  //convert the decimal value to binary
  binInput.value = decValue.toString(2);
});

//Convert binary to decima when user input in the binary field
binInput.addEventListener("input", () => {
  let binValue = binInput.value;

  if (binValidator(binValue)) {
    decInput.value = parseInt(binValue, 2);
    errorMsg.classList.remove("error");
  } else {
    errorMsg.classList.add("error");
  }
  function binValidator(num) {
    for (let i = 0; i < num.length; i++) {
      if (num[i] != "0" && num[i] != "1") {
        return false;
      }
    }
    return true;
  }
});
