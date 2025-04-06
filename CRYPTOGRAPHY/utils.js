const symbols =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890,.<>'\";:[]{}()+=-*&^%$#@!?/\\|~` ";

/**
 * Encodes the caesar cipher
 * @param {string} text
 * @param {number} key
 * @returns A string encoded using the caesar cipher
 */
function encodeCaesarCipher(text, key) {
  if (!text) throw new Error("Text is empty");
  return text
    .split("")
    .map((char) => {
      const charIndex = symbols.indexOf(char);
      return charIndex !== -1
        ? symbols[(charIndex + key) % symbols.length]
        : char;
    })
    .join("");
}

/**
 * Decodes the caesar cipher
 * @param {string} encryptedCode
 * @param {number} key
 * @returns A string decoded using the caesar cipher
 */
function decodeCaesarCipher(encryptedCode, key) {
  if (!encryptedCode) throw new Error("Text is empty");
  return encryptedCode
    .split("")
    .map((char) => {
      const charIndex = symbols.indexOf(char);
      if (charIndex !== -1) {
        let index = (charIndex - key) % symbols.length;
        if (index < 0) index += symbols.length;
        return symbols[index];
      } else return char;
    })
    .join("");
}

/**
 * Reverses the given text
 * @param {string} text
 * @returns string that is reversed
 */
const reverseCipher = (text) => text.split("").reverse().join("");

/**
 * Encodes the transposition cipher
 * @param {string} text
 * @param {number} key
 * @returns A string encoded using the transposition cipher
 */
function encodeWithTransposition(text, key) {
  const numberOfColumns = Math.ceil(text.length / key);
  const cipherArray = new Array(key)
    .fill("")
    .map(() => new Array(numberOfColumns).fill(""));
  for (let i = 0; i < text.length; i++) {
    const row = i % key;
    const col = Math.floor(i / key);
    cipherArray[row][col] = text[i];
  }
  return cipherArray.flat().join("");
}

/**
 * Decodes the transposition cipher
 * @param {string} text
 * @param {number} key
 * @returns A string decoded using the transposition cipher
 */
function decryptTranspositionCipher(text, key) {
  const numberOfColumns = Math.ceil(text.length / key);
  const cipherArray = new Array(key)
    .fill("")
    .map(() => new Array(numberOfColumns).fill(""));
  let index = 0;
  for (let col = 0; col < numberOfColumns; col++) {
    for (let row = 0; row < key; row++) {
      if (index < text.length) {
        cipherArray[row][col] = text[index++];
      }
    }
  }
  return cipherArray.flat().join("");
}

/**
 * Encodes the Vigenère cipher
 * @param {string} text
 * @param {string} key
 * @returns A string encoded using the vigenere cipher
 */
function encodeVigenereCipher(text, key) {
  if (!text) throw new Error("Text is empty");
  return text
    .split("")
    .map((char, i) => {
      const charIndex = symbols.indexOf(char);
      if (charIndex !== -1) {
        const keyChar = key[i % key.length];
        const keyCharIndex = symbols.indexOf(keyChar);
        return symbols[(charIndex + keyCharIndex) % symbols.length];
      } else return char;
    })
    .join("");
}

/**
 * Decodes the Vigenère cipher
 * @param {string} encryptedCode
 * @param {string} key
 * @returns A string decoded using the vigenere cipher
 */
function decodeVigenereCipher(encryptedCode, key) {
  if (!encryptedCode) throw new Error("Text is empty");
  return encryptedCode
    .split("")
    .map((char, i) => {
      const charIndex = symbols.indexOf(char);
      if (charIndex !== -1) {
        const keyChar = key[i % key.length];
        const keyCharIndex = symbols.indexOf(keyChar);
        let index = (charIndex - keyCharIndex) % symbols.length;
        if (index < 0) index += symbols.length;
        return symbols[index];
      } else return char;
    })
    .join("");
}

/**
 * Finds the modular inverse of a number
 * @param {number} a
 * @param {number} m
 * @returns {number} The modular inverse of a under modulo m
 */
function modInverse(a, m) {
  a = ((a % m) + m) % m;
  for (let x = 1; x < m; x++) {
    if ((a * x) % m === 1) {
      return x;
    }
  }
  throw new Error("No modular inverse found");
}

/**
 * Encodes the multiplicative cipher
 * @param {string} text
 * @param {number} key
 * @returns A string encoded using the multiplicative cipher
 */
function encodeMultiplicativeCipher(text, key) {
  if (!text) throw new Error("Text is empty");
  return text
    .split("")
    .map((char) => {
      const charIndex = symbols.indexOf(char);
      return charIndex !== -1
        ? symbols[(charIndex * key) % symbols.length]
        : char;
    })
    .join("");
}

/**
 * Decodes the multiplicative cipher
 * @param {string} text
 * @param {number} key
 * @returns A string decoded using the multiplicative cipher
 */
function decodeMultiplicativeCipher(text, key) {
  if (!text) throw new Error("Text is empty");
  const modInv = modInverse(key, symbols.length);
  return text
    .split("")
    .map((char) => {
      const charIndex = symbols.indexOf(char);
      return charIndex !== -1
        ? symbols[(charIndex * modInv) % symbols.length]
        : char;
    })
    .join("");
}

/**
 * Encodes the affine cipher
 * @param {string} text
 * @param {number} key1
 * @param {number} key2
 * @returns A string encoded using the affine cipher
 */
const encodeAffineCipher = (text, key1, key2) =>
  encodeCaesarCipher(encodeMultiplicativeCipher(text, key1), key2);

/**
 * Decodes the affine cipher
 * @param {string} text
 * @param {number} key1
 * @param {number} key2
 * @returns A string decoded using the affine cipher
 */
const decodeAffineCipher = (text, key1, key2) =>
  decodeMultiplicativeCipher(decodeCaesarCipher(text, key2), key1);

/**
 *
 * @param {string} encryptionType
 * @param {HTMLInputElement} file
 * @param {HTMLDivElement} output
 * @param {number} key
 * @param {number} key
 */
function encryptFile(encryptionType, file, output, key, key = key) {
  const blob = new File(file, "dan");
}

/**
 * Function to select the type of encryption that will take place
 * @param {HTMLSelectElement} encryptionType
 * @param {number|string} key
 * @param {HTMLInputElement} input
 * @param {HTMLDivElement} output
 */
export function cipher(encryptionType, input, output, key, key1 = key) {
  const encryptionMethods = {
    caesar: () => encodeCaesarCipher(input.value, key),
    reverse: () => reverseCipher(input.value),
    transposition: () => encodeWithTransposition(input.value, key),
    vigenere: () => encodeVigenereCipher(input.value, key),
    multiplicative: () => encodeMultiplicativeCipher(input.value, key),
    affine: () => encodeAffineCipher(input.value, key, key1),
  };

  if (!encryptionType.value || !encryptionMethods[encryptionType.value]) {
    throw new Error("That is not part of the options");
  }

  output.textContent = encryptionMethods[encryptionType.value]();
}

/**
 * Function to select the type of decryption that will take place
 * @param {HTMLSelectElement} decryptionType
 * @param {number|string} key
 * @param {HTMLInputElement} input
 * @param {HTMLDivElement} output
 */
export function decipher(decryptionType, input, output, key, key1 = key) {
  const decryptionMethods = {
    caesar: () => decodeCaesarCipher(input.value, key),
    reverse: () => reverseCipher(input.value),
    transposition: () => decryptTranspositionCipher(input.value, key),
    vigenere: () => decodeVigenereCipher(input.value, key),
    multiplicative: () => decodeMultiplicativeCipher(input.value, key),
    affine: () => decodeAffineCipher(input.value, key, key1),
  };

  if (!decryptionType.value || !decryptionMethods[decryptionType.value]) {
    throw new Error("That is not part of the options");
  }

  output.textContent = decryptionMethods[decryptionType.value]();
}
