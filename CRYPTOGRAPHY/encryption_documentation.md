# Encryption Algorithms Documentation

This document provides an overview of the encryption algorithms implemented in the code, along with detailed explanations of each function.

## Overview of Encryption Algorithms

The following encryption algorithms are implemented:

1. **Caesar Cipher**: A substitution cipher where each letter in the plaintext is 'shifted' a certain number of places down or up the alphabet.
2. **Transposition Cipher**: A method of encryption where the positions of the characters are shifted according to a regular system.
3. **Vigenère Cipher**: A method of encrypting alphabetic text by using a simple form of poly-alphabetic substitution.
4. **Multiplicative Cipher**: A type of mono-alphabetic substitution cipher where each letter is replaced by another letter based on a multiplicative key.
5. **Affine Cipher**: A combination of the Caesar and Multiplicative ciphers.

## Function Descriptions

### 1. `encodeCaesarCipher(text, key)`

- **Description**: Encodes the given text using the Caesar cipher.
- **Parameters**:
  - `text`: The plaintext to be encoded.
  - `key`: The number of positions to shift each character.
- **Returns**: A string encoded using the Caesar cipher.

### 2. `decodeCaesarCipher(encryptedCode, key)`

- **Description**: Decodes the given encrypted text using the Caesar cipher.
- **Parameters**:
  - `encryptedCode`: The text to be decoded.
  - `key`: The number of positions to shift each character back.
- **Returns**: A string decoded using the Caesar cipher.

### 3. `reverseCipher(text)`

- **Description**: Reverses the given text.
- **Parameters**:
  - `text`: The text to be reversed.
- **Returns**: The reversed string.

### 4. `encodeWithTransposition(text, key)`

- **Description**: Encodes the given text using the transposition cipher.
- **Parameters**:
  - `text`: The plaintext to be encoded.
  - `key`: The number of columns to use in the transposition.
- **Returns**: A string encoded using the transposition cipher.

### 5. `decryptTranspositionCipher(text, key)`

- **Description**: Decodes the given encrypted text using the transposition cipher.
- **Parameters**:
  - `text`: The text to be decoded.
  - `key`: The number of columns used in the transposition.
- **Returns**: A string decoded using the transposition cipher.

### 6. `encodeVigenereCipher(text, key)`

- **Description**: Encodes the given text using the Vigenère cipher.
- **Parameters**:
  - `text`: The plaintext to be encoded.
  - `key`: The keyword used for encoding.
- **Returns**: A string encoded using the Vigenère cipher.

### 7. `decodeVigenereCipher(encryptedCode, key)`

- **Description**: Decodes the given encrypted text using the Vigenère cipher.
- **Parameters**:
  - `encryptedCode`: The text to be decoded.
  - `key`: The keyword used for decoding.
- **Returns**: A string decoded using the Vigenère cipher.

### 8. `encodeMultiplicativeCipher(text, key)`

- **Description**: Encodes the given text using the multiplicative cipher.
- **Parameters**:
  - `text`: The plaintext to be encoded.
  - `key`: The multiplicative key.
- **Returns**: A string encoded using the multiplicative cipher.

### 9. `decodeMultiplicativeCipher(text, key)`

- **Description**: Decodes the given encrypted text using the multiplicative cipher.
- **Parameters**:
  - `text`: The text to be decoded.
  - `key`: The multiplicative key.
- **Returns**: A string decoded using the multiplicative cipher.

### 10. `encodeAffineCipher(text, key1, key2)`

- **Description**: Encodes the given text using the affine cipher.
- **Parameters**:
  - `text`: The plaintext to be encoded.
  - `key1`: The multiplicative key.
  - `key2`: The additive key.
- **Returns**: A string encoded using the affine cipher.

### 11. `decodeAffineCipher(text, key1, key2)`

- **Description**: Decodes the given encrypted text using the affine cipher.
- **Parameters**:
  - `text`: The text to be decoded.
  - `key1`: The multiplicative key.
  - `key2`: The additive key.
- **Returns**: A string decoded using the affine cipher.

## Usage

To use the encryption functions, import them from `utils.js` and call the desired function with the appropriate parameters.

```javascript
import { encodeCaesarCipher, decodeCaesarCipher } from "./utils.js";

const encoded = encodeCaesarCipher("Hello, World!", 3);
const decoded = decodeCaesarCipher(encoded, 3);
```

This documentation provides a comprehensive overview of the encryption algorithms and their respective functions.
