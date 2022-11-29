"use strict";

const decInput = document.getElementById("decInput");
const octInput = document.getElementById("octInput");
let errorMsg = document.querySelector(".msg-error");

//convert Decimal to Octal when user input in the decimal field
decInput.addEventListener("input", () => {
  let decValue = parseInt(decInput.value);
  //convert decimal to octal
  octInput.value = decValue.toString(8);
});

//convert Octal to Decimal when user input in the Octal field
octInput.addEventListener("input", () => {
  let octValue = octInput.value;

  if (octValidator(octValue)) {
    decInput.value = parseInt(octValue, 8);
    errorMsg.classList.remove("error");
  } else {
    errorMsg.classList.add("error");
  }
  function octValidator(octValue) {
    for (let i = 0; i < octValue.length; i++) {
      if (octValue[i] == "8" || octValue[i] == "9") {
        return false;
      }
    }
    return true;
  }
});
