"use strict";

const textInput = document.getElementById("textInput");
const asciiInput = document.getElementById("asciiInput");
let errorMsg = document.querySelector(".errorMsg");

textInput.addEventListener("input", () => {
  let textValue = textInput.value;
  let array = [];
  for (let i = 0; i < textValue.length; i++) {
    array.push(textValue.charCodeAt(i));
  }
  asciiInput.value = array.join(" ");
});

asciiInput.addEventListener("input", () => {
  let asciiValue = asciiInput.value;
  let array = asciiValue.split(" ");

  array.forEach(function (item) {
    if (Number(item) < 32 || Number(item) > 126 || isNaN(item)) {
      errorMsg.classList.add("error");
    } else {
      errorMsg.classList.remove("error");
    }
    if (Number(item) == "") {
      errorMsg.classList.remove("error");
    }
  });

  let decimalValues = array.map((val) => String.fromCharCode(val));
  textInput.value = decimalValues.join("");
});
