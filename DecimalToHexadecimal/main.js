"use strict";

const decInput = document.getElementById("decInput");
const hexInput = document.getElementById("hexInput");
let errorMsg = document.querySelector(".errorMsg");

//Convert from decimal to hexadecimal when user input in the decimal field
decInput.addEventListener("input", () => {
  let decValue = parseInt(decInput.value);
  //convert a decimal value to hexadecimal
  hexInput.value = decValue.toString(16);
});

hexInput.addEventListener("input", () => {
  let hexValue = hexInput.value;
  decInput.value = parseInt(hexValue, 16);

  if (hexValidator(hexValue)) {
    hexValue = decInput.value;
    errorMsg.classList.remove("error");
  } else {
    errorMsg.classList.add("error");
  }

  function hexValidator(hexValue) {
    const regExp = /^[0-9a-f]+$/i;
    for (let i = 0; i < hexValue.length; i++) {
      if (regExp.test(hexValue[i]) == false) return false;
    }
    return true;
  }
});
