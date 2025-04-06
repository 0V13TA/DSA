import { cipher, decipher } from "./utils.js";

//#region Declarations
const input = document.getElementById("input");
const output = document.getElementById("output");
const keyElement = document.getElementById("key");
const encryptionType = document.getElementById("encryption");
const switchBtn = document.getElementById("switchBtn");
const submitBtn = document.getElementById("submitBtn");
const copyBtn = document.getElementById("copy");
const clearBtn = document.getElementById("clear");
const key2ElementDiv = document.querySelector("#key2Element");
let key =
  keyElement.type === "number" ? Number(keyElement.value) : keyElement.value;

//#endregion

//#region EventListeners
keyElement.onchange = (e) =>
  (key =
    keyElement.type === "number" ? Number(keyElement.value) : keyElement.value);

encryptionType.onchange = (e) => {
  const value = e.target.value;

  switch (value) {
    case "reverse":
      keyElement.style.display = "none";
      break;

    case "vigenere":
      keyElement.type = "text";
      keyElement.value = "";
      break;

    case "affine":
      key2ElementDiv.style.display = "flex";
      break;

    default:
      keyElement.style.display = "inlineBlock";
      keyElement.type = "number";
      key2ElementDiv.style.display = "none";
      break;
  }
};

clearBtn.onclick = () => {
  output.textContent = "";
  input.value = "";
};

copyBtn.onclick = () => {
  if (output.textContent.trim())
    navigator.clipboard.writeText(output.textContent);
};

switchBtn.onclick = (e) =>
  (e.target.textContent =
    e.target.textContent.toLowerCase() === "cipher" ? "decipher" : "cipher");

submitBtn.onclick = () => {
  if (encryptionType.value === "vigenere") {
    key = keyElement.value;
  } else key = Number(keyElement.value);

  if (encryptionType.value === "affine") {
    const key2 = document.getElementById("key2");
    switchBtn.textContent.toLowerCase() === "cipher"
      ? cipher(encryptionType, input, output, key, Number(key2.value))
      : decipher(encryptionType, input, output, key, Number(key2.value));
  } else {
    switchBtn.textContent.toLowerCase() === "cipher"
      ? cipher(encryptionType, input, output, key)
      : decipher(encryptionType, input, output, key);
  }
};
//#endregion
