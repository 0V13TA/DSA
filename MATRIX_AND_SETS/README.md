# Documentation for Matrix, ExtendedSet, and Vector Classes

## Overview

This documentation provides a comprehensive guide to the `Matrix`, `ExtendedSet`, and `Vector` classes, including their methods, usage examples, and mathematical explanations.

---

## Matrix Class

### Description

The `Matrix` class represents a mathematical matrix and provides various methods to perform matrix operations.

### Constructor

```javascript
constructor(array);
```

- **Parameters**:
  - `array`: A 2D array of numbers representing the matrix.
- **Throws**:
  - An error if the input is not a non-empty 2D array of numbers.

### Methods

#### `isSquare()`

```javascript
isSquare();
```

- **Returns**: `true` if the matrix is square, otherwise `false`.

#### `isNullMatrix()`

```javascript
isNullMatrix();
```

- **Returns**: `true` if the matrix is a null matrix (all elements are zero), otherwise `false`.

#### `isDiagonal()`

```javascript
isDiagonal();
```

- **Returns**: `true` if the matrix is a diagonal matrix (non-diagonal elements are zero), otherwise `false`.

#### `isUnitMatrix()`

```javascript
isUnitMatrix();
```

- **Returns**: `true` if the matrix is a unit matrix (diagonal elements are all one), otherwise `false`.

#### `getDimensions()`

```javascript
getDimensions();
```

- **Returns**: An array containing the number of rows and columns of the matrix.

#### `getLeadingDiagonal()`

```javascript
getLeadingDiagonal();
```

- **Returns**: An array of the leading diagonal elements.

#### `getRow(index)`

```javascript
getRow(index);
```

- **Parameters**:
  - `index`: The index of the row to retrieve.
- **Returns**: The specified row.
- **Throws**: An error if the index is out of bounds.

#### `getColumn(index)`

```javascript
getColumn(index);
```

- **Parameters**:
  - `index`: The index of the column to retrieve.
- **Returns**: The specified column.
- **Throws**: An error if the index is out of bounds.

#### `getTrace()`

```javascript
getTrace();
```

- **Returns**: The sum of the leading diagonal elements.

#### `getTypeOfMatrix()`

```javascript
getTypeOfMatrix();
```

- **Returns**: A string representing the type of the matrix (e.g., "square", "rectangular", "unit", etc.).

#### `isConformalTo(matrix)`

```javascript
isConformalTo(matrix);
```

- **Parameters**:
  - `matrix`: Another `Matrix` instance to compare.
- **Returns**: `true` if the matrices are conformal (same dimensions), otherwise `false`.
- **Throws**: An error if the input is not a `Matrix` instance.

#### `isEqualTo(matrix)`

```javascript
isEqualTo(matrix);
```

- **Parameters**:
  - `matrix`: Another `Matrix` instance to compare.
- **Returns**: `true` if the matrices are equal, otherwise `false`.
- **Throws**: An error if the input is not a `Matrix` instance.

#### `plus(matrix)`

```javascript
plus(matrix);
```

- **Parameters**:
  - `matrix`: Another `Matrix` instance to add.
- **Returns**: A new `Matrix` instance representing the sum.
- **Throws**: An error if the input is not a `Matrix` instance or if the matrices are not conformal.

#### `minus(matrix)`

```javascript
minus(matrix);
```

- **Parameters**:
  - `matrix`: Another `Matrix` instance to subtract.
- **Returns**: A new `Matrix` instance representing the difference.
- **Throws**: An error if the input is not a `Matrix` instance or if the matrices are not conformal.

#### `scalarMultiplyBy(number)`

```javascript
scalarMultiplyBy(number);
```

- **Parameters**:
  - `number`: A scalar to multiply the matrix by.
- **Returns**: A new `Matrix` instance representing the result.
- **Throws**: An error if the input is not a number.

#### `multipliedBy(matrix)`

```javascript
multipliedBy(matrix);
```

- **Parameters**:
  - `matrix`: Another `Matrix` instance to multiply.
- **Returns**: A new `Matrix` instance representing the product.
- **Throws**: An error if the input is not a `Matrix` instance or if the matrices are not conformal for multiplication.

#### `getTranspose()`

```javascript
getTranspose();
```

- **Returns**: A new `Matrix` instance representing the transposed matrix.

#### `getDeterminant()`

```javascript
getDeterminant();
```

- **Returns**: The determinant of the matrix.
- **Throws**: An error if the matrix is not square.

#### `getInverse()`

```javascript
getInverse();
```

- **Returns**: A new `Matrix` instance representing the inverse of the matrix.
- **Throws**: An error if the matrix is not square or if it is singular.

#### `getAdjoint()`

```javascript
getAdjoint();
```

- **Returns**: A new `Matrix` instance representing the adjugate (also known as the classical adjugate)
- **Throws**: An error if the matrix is not square.

#### `performHadamardMultiplicationOn()`

```javascript
performHadamardMultiplicationOn();
```

- **Returns**: A new `Matrix` instance representing the hadamard product (also known as the element wise multiplication)
- **Throws**: An error if the matrix is not square.

---

## ExtendedSet Class

### Description

The `ExtendedSet` class extends the built-in `Set` class and provides additional set operations.

### Constructor

```javascript
constructor(iterable);
```

- **Parameters**:
  - `iterable`: An optional iterable to initialize the set.

### Methods

#### `union(otherSet)`

```javascript
union(otherSet);
```

- **Parameters**:
  - `otherSet`: Another `Set` instance to union with.
- **Returns**: A new `ExtendedSet` instance representing the union of the two sets.

#### `intersection(otherSet)`

```javascript
intersection(otherSet);
```

- **Parameters**:
  - `otherSet`: Another `Set` instance to intersect with.
- **Returns**: A new `ExtendedSet` instance representing the intersection of the two sets.

#### `difference(otherSet)`

```javascript
difference(otherSet);
```

- **Parameters**:
  - `otherSet`: Another `Set` instance to difference with.
- **Returns**: A new `ExtendedSet` instance representing the difference of the two sets.

#### `isSubsetOf(otherSet)`

```javascript
isSubsetOf(otherSet);
```

- **Parameters**:
  - `otherSet`: Another `Set` instance to check against.
- **Returns**: `true` if this set is a subset of the other set, otherwise `false`.

#### `isSupersetOf(otherSet)`

```javascript
isSupersetOf(otherSet);
```

- **Parameters**:
  - `otherSet`: Another `Set` instance to check against.
- **Returns**: `true` if this set is a superset of the other set, otherwise `false`.

---

## Vector Class

### Description

The `Vector` class represents a mathematical vector and provides various methods to perform vector operations.

### Constructor

```javascript
constructor(array);
```

- **Parameters**:
  - `array`: An array of numbers representing the vector.
- **Throws**:
  - An error if the input is not a non-empty array of numbers.

### Methods

#### `getDimensions()`

```javascript
getDimensions();
```

- **Returns**: The number of elements in the vector.

#### `add(vector)`

```javascript
add(vector);
```

- **Parameters**:
  - `vector`: Another `Vector` instance to add.
- **Returns**: A new `Vector` instance representing the sum.
- **Throws**: An error if the input is not a `Vector` instance or if the vectors are not of the same dimension.

#### `subtract(vector)`

```javascript
subtract(vector);
```

- **Parameters**:
  - `vector`: Another `Vector` instance to subtract.
- **Returns**: A new `Vector` instance representing the difference.
- **Throws**: An error if the input is not a `Vector` instance or if the vectors are not of the same dimension.

#### `multiplyByScalar(scalar)`

```javascript
multiplyByScalar(scalar);
```

- **Parameters**:
  - `scalar`: A scalar to multiply the vector by.
- **Returns**: A new `Vector` instance representing the result.
- **Throws**: An error if the input is not a number.

#### `dotProduct(vector)`

```javascript
dotProduct(vector);
```

- **Parameters**:
  - `vector`: Another `Vector` instance to calculate the dot product with.
- **Returns**: The dot product of the two vectors.
- **Throws**: An error if the input is not a `Vector` instance or if the vectors are not of the same dimension.

#### `magnitude()`

```javascript
magnitude();
```

- **Returns**: The magnitude of the vector.

#### `normalize()`

```javascript
normalize();
```

- **Returns**: A new `Vector` instance representing the normalized vector.
- **Throws**: An error if the vector is a zero vector.

---

## Example Usage

### Matrix Example

```javascript
const matrixA = new Matrix([
  [1, 2],
  [3, 4],
]);
const matrixB = new Matrix([
  [5, 6],
  [7, 8],
]);

const sum = matrixA.plus(matrixB);
console.log(sum.arr); // [[6, 8], [10, 12]]
```

### ExtendedSet Example

```javascript
const setA = new ExtendedSet([1, 2, 3]);
const setB = new ExtendedSet([3, 4, 5]);

const unionSet = setA.union(setB);
console.log([...unionSet]); // [1, 2, 3, 4, 5]
```

### Vector Example

```javascript
const vectorA = new Vector([1, 2, 3]);
const vectorB = new Vector([4, 5, 6]);

const dotProduct = vectorA.dotProduct(vectorB);
console.log(dotProduct); // 32
```

---

## Mathematical Explanation

### Matrix Operations

- **Addition**: The sum of two matrices is obtained by adding their corresponding elements.
- **Subtraction**: The difference of two matrices is obtained by subtracting their corresponding elements.
- **Multiplication**: The product of two matrices is calculated by taking the dot product of rows and columns.
- **Determinant**: The determinant of a matrix provides information about the matrix's properties, such as whether it is invertible.
- **Inverse**: The inverse of a matrix is a matrix that, when multiplied with the original matrix, yields the identity matrix.

### Vector Operations

- **Addition**: The sum of two vectors is obtained by adding their corresponding components.
- **Dot Product**: The dot product of two vectors is calculated by multiplying their corresponding components and summing the results.
- **Magnitude**: The magnitude of a vector is the length of the vector, calculated using the Pythagorean theorem.

---

This documentation serves as a complete guide for understanding and utilizing the `Matrix`, `ExtendedSet`, and `Vector` classes effectively.
