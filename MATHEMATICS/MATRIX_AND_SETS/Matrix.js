/**
 * Class representing a Matrix
 */
export class Matrix {
  /**
   * Create a Matrix
   * @param {number[][]} array
   */
  constructor(array) {
    if (!Array.isArray(array) || array.length === 0)
      throw new Error("Value must be a non-empty array");

    if (!array.every((row) => Array.isArray(row)))
      throw new Error("Array must be a 2D array");

    const rowLength = array[0].length;
    if (array.some((row) => row.length !== rowLength))
      throw new Error("All rows must have the same length");

    if (array.some((row) => row.some((num) => typeof num !== "number")))
      throw new Error("All elements must be numbers");

    this.arr = array;
  }


  /**
   * Check if the matrix is square
   * @returns A boolean. True if the matrix is square, otherwise false.
   */
  isSquare() {
    const [row, col] = this.getDimensions();
    return row === col;
  }

  /**
   * Check if the matrix is a null matrix
   * @returns {boolean} True if the matrix is a null matrix, otherwise false.
   */
  isNullMatrix() {
    const [row, col] = this.getDimensions();

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (this.arr[i][j] !== 0) return false;
      }
    }

    return true;
  }

  /**
   * Check if the matrix is a diagonal matrix
   * @returns {boolean} True if the matrix is a diagonal matrix, otherwise false.
   */
  isDiagonal() {
    const [row, col] = this.getDimensions();
    const diagonal = this.getLeadingDiagonal();
    let isDiagonalMatrix = true;
    let counter = 0;

    if (diagonal.includes(0)) isDiagonalMatrix = false;

    for (let i = 0; i < col; i++) {
      for (let j = 0; j < row; j++) {
        if (j === counter) continue;

        if (this.arr[i][j] !== 0) isDiagonalMatrix = false;
      }
      counter++;
    }

    return isDiagonalMatrix;
  }

  /**
   * Check if the matrix is a unit matrix
   * @returns {boolean} True if the matrix is a unit matrix, otherwise false.
   */
  isUnitMatrix() {
    const dimension = this.getLeadingDiagonal();

    return dimension.every((num) => num === 1) && this.isDiagonal();
  }

  /**
   * Get the dimensions of the matrix.
   * @returns {number[]} An array where the first value is the number of rows and the second is the number of columns.
   */
  getDimensions() {
    const row = this.arr.length;
    const column = this.arr[0].length;

    return [row, column];
  }

  /**
   * Get the leading diagonal of the matrix.
   * @returns {number[]} An array of the leading diagonal elements.
   */
  getLeadingDiagonal() {
    const [row, ..._] = this.getDimensions();
    const leadingDiagonal = [];

    if (!this.isSquare()) return leadingDiagonal;

    for (let i = 0; i < row; i++) {
      leadingDiagonal.push(this.arr[i][i]);
    }

    return leadingDiagonal;
  }

  /**
   * Get a specific row of the matrix.
   * @param {number} index - The index of the row.
   * @returns {number[]} The specified row.
   * @throws Will throw an error if the index is out of bounds.
   */
  getRow(index) {
    const [row] = this.getDimensions();

    if (index > row - 1 || index < 0) throw new Error("Invalid index");

    return this.arr[index];
  }

  /**
   * Get a specific column of the matrix.
   * @param {number} index - The index of the column.
   * @returns {number[]} The specified column.
   * @throws Will throw an error if the index is out of bounds.
   */
  getColumn(index) {
    const [row, col] = this.getDimensions();
    const columns = [];

    if (index > col - 1 || index < 0) throw new Error("Invalid index");

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        columns.push(this.arr[i][index]);
        break;
      }
    }

    return columns;
  }

  /**
   * @returns {number[]} The entires below the leading diagonal
   */
  getEntriesBelowLeadingDiagonal() {
    const entriesBelowLeadingDiagonal = [];
    const [row, col] = this.getDimensions();

    if (!this.isSquare()) throw new Error("Matrix must be a square matrix");

    for (let i = 0; i < col; i++) {
      for (let j = 0; j < row; j++) {
        if (j >= i) continue;
        entriesBelowLeadingDiagonal.push(this.arr[i][j]);
      }
    }

    return entriesBelowLeadingDiagonal;
  }

  /**
   * @returns {number[]} The entires below the leading diagonal
   */
  getEntriesAboveLeadingDiagonal() {
    const entriesAboveLeadingDiagonal = [];
    const [row, col] = this.getDimensions();

    if (!this.isSquare()) throw new Error("Matrix must be a square matrix");

    for (let i = 0; i < col; i++) {
      for (let j = 0; j < row; j++) {
        if (j <= i) continue;
        entriesAboveLeadingDiagonal.push(this.arr[i][j]);
      }
    }

    return entriesAboveLeadingDiagonal;
  }

  /**
   * Get the trace of the matrix.
   * @returns {number} The sum of the leading diagonal elements.
   */
  getTrace() {
    return this.getLeadingDiagonal().reduce((acc, cur) => acc + cur);
  }

  /**
   * Get the type of the matrix.
   * @returns {string} The type of the matrix.
   */
  getTypeOfMatrix() {
    const [row, col] = this.getDimensions();

    if (row === 1 && col > 1) return "row";

    if (col === 1 && row > 1) return "column";

    if (this.isNullMatrix()) return "zero";

    if (this.isUnitMatrix()) return "unit";

    if (this.isDiagonal()) return "diagonal";

    if (this.isSquare()) return "square";
    else return "rectangular";
  }

  /**
   * Check if the matrix is conformal to another matrix.
   * @param {Matrix} matrix - The matrix to compare with.
   * @returns {boolean} True if the matrices are conformal, otherwise false.
   * @throws Will throw an error if the input is not a Matrix instance.
   */
  isConformalTo(matrix) {
    if (!(matrix instanceof Matrix))
      throw new Error("Value Must be of type Matrix");

    const [row1, col1] = this.getDimensions();
    const [row2, col2] = matrix.getDimensions();

    if (row1 === row2 && col1 === col2) return true;

    return false;
  }

  /**
   * Check if the matrix is equal to another matrix.
   * @param {Matrix} matrix - The matrix to compare with.
   * @returns {boolean} True if the matrices are equal, otherwise false.
   * @throws Will throw an error if the input is not a Matrix instance.
   */
  isEqualTo(matrix) {
    const [row, col] = this.getDimensions();
    if (!(matrix instanceof Matrix))
      throw new Error("Value Must be of type Matrix");

    if (!this.isConformalTo(matrix)) return false;

    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        if (this.arr[i][j] !== matrix.arr[i][j]) return false;
      }
    }

    return true;
  }

  /**
   * Add another matrix to this matrix.
   * @param {Matrix} matrix - The matrix to add.
   * @returns {Matrix} The resulting matrix after addition.
   * @throws Will throw an error if the input is not a Matrix instance or if the matrices are not conformal.
   */
  plus(matrix) {
    if (!(matrix instanceof Matrix))
      throw new Error("Value Must be of type Matrix");

    if (!this.isConformalTo(matrix))
      throw new Error("Matrices must be conformal");
    /**
     * @type {number[][]}
     */
    const newArr = [];

    const [row, col] = this.getDimensions();

    for (let i = 0; i < row; i++) {
      newArr.push([]);

      for (let j = 0; j < col; j++) {
        newArr[i].push(this.arr[i][j] + matrix.arr[i][j]);
      }
    }
    return new Matrix(newArr);
  }

  /**
   * Subtract another matrix from this matrix.
   * @param {Matrix} matrix - The matrix to subtract.
   * @returns {Matrix} The resulting matrix after subtraction.
   * @throws Will throw an error if the input is not a Matrix instance or if the matrices are not conformal.
   */
  minus(matrix) {
    if (!(matrix instanceof Matrix))
      throw new Error("Value Must be of type Matrix");

    if (!this.isConformalTo(matrix))
      throw new Error("Matrices must be conformal");
    /**
     * @type {number[][]}
     */
    const newArr = [];

    const [row, col] = this.getDimensions();

    for (let i = 0; i < row; i++) {
      newArr.push([]);

      for (let j = 0; j < col; j++) {
        newArr[i].push(this.arr[i][j] - matrix.arr[i][j]);
      }
    }
    return new Matrix(newArr);
  }

  /**
   * Multiply the matrix by a scalar.
   * @param {number} number - The scalar to multiply by.
   * @returns {Matrix} The resulting matrix after scalar multiplication.
   * @throws Will throw an error if the input is not a number.
   */
  scalarMultiplyBy(number) {
    if (isNaN(number)) throw new Error("Value must be a number");
    /**
     * @type {number[][]}
     */
    const newArr = [];
    const [row, col] = this.getDimensions();

    for (let i = 0; i < row; i++) {
      newArr.push([]);

      for (let j = 0; j < col; j++) {
        newArr[i].push(this.arr[i][j] * number);
      }
    }

    return new Matrix(newArr);
  }

  /**
   * Perform element wise multiplication on this matrix.
   * @param {Matrix} matrix - The matrix to perform element wise multiplication.
   * @returns {Matrix} The resulting matrix after performing the element wise multiplication (Hadamard Product).
   * @throws Will throw an error if the input is not a Matrix instance or if the matrices are not conformal.
   */
  performHadamardMultiplicationOn(matrix) {
    if (!(matrix instanceof Matrix))
      throw new Error("Value Must be of type Matrix");

    if (!this.isConformalTo(matrix))
      throw new Error("Matrices must be conformal");
    /**
     * @type {number[][]}
     */
    const newArr = [];

    const [row, col] = this.getDimensions();

    for (let i = 0; i < row; i++) {
      newArr.push([]);

      for (let j = 0; j < col; j++) {
        newArr[i].push(this.arr[i][j] * matrix.arr[i][j]);
      }
    }
    return new Matrix(newArr);
  }

  /**
   * Multiply this matrix by another matrix.
   * @param {Matrix} matrix - The matrix to multiply by.
   * @returns {Matrix} The resulting matrix after multiplication.
   * @throws Will throw an error if the input is not a Matrix instance or if the matrices are not conformal for multiplication.
   */
  multipliedBy(matrix) {
    if (!(matrix instanceof Matrix))
      throw new Error("Value Must be of type Matrix");

    if (matrix.getTypeOfMatrix() === "unit") return new Matrix(this.arr);

    const [row1, col1] = this.getDimensions();
    const [row2, col2] = matrix.getDimensions();

    if (col1 !== row2)
      throw new Error("Matrices are not conformal for multiplication");

    /**
     * @type {number[][]}
     */
    const newArr = Array.from({ length: row1 }, () => Array(col2).fill(0));

    for (let i = 0; i < row1; i++) {
      for (let j = 0; j < col2; j++) {
        for (let k = 0; k < col1; k++) {
          newArr[i][j] += this.arr[i][k] * matrix.arr[k][j];
        }
      }
    }

    return new Matrix(newArr);
  }

  /**
   * Transpose the matrix.
   * @returns {Matrix} The resulting matrix after transposition.
   */
  getTranspose() {
    const [row, col] = this.getDimensions();
    /**
     * @type {number[][]}
     */
    const newArr = Array.from({ length: col }, () => Array(row).fill(0));
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        newArr[j][i] = this.arr[i][j];
      }
    }
    return new Matrix(newArr);
  }

  /**
   * Get the minor of a specific element in the matrix.
   * @param {number} targetRow - The row of the element.
   * @param {number} targetColumn - The column of the element.
   * @returns {Matrix} The cofactor of the element.
   * @throws Will throw an error if the matrix is not square.
   */
  getMinor(targetRow, targetColumn) {
    if (!this.isSquare()) throw new Error("Matrix must be square");
    const [row, col] = this.getDimensions();
    if (row === 1) return new Matrix(this.arr);
    /**
     * @type {number[][]}
     */
    const minor = [];
    for (let i = 0; i < row; i++) {
      if (i === targetRow) continue;
      minor.push([]);
      for (let j = 0; j < col; j++) {
        if (j === targetColumn) continue;
        minor[minor.length - 1].push(this.arr[i][j]);
      }
    }
    return new Matrix(minor);
  }

  /**
   * Get the cofactor of a specific element in the matrix.
   * @param {number} targetRow - The row of the element.
   * @param {number} targetColumn - The column of the element.
   * @returns {number} The cofactor of the element.
   * @throws Will throw an error if the matrix is not square.
   */
  getCofactor(targetRow, targetColumn) {
    if (!this.isSquare()) throw new Error("Matrix must be square");
    const minor = this.getMinor(targetRow, targetColumn);
    return Math.pow(-1, targetRow + targetColumn) * minor.getDeterminant();
  }

  /**
   * Get the determinant of the matrix.
   * @returns {number} The determinant of the matrix.
   * @throws Will throw an error if the matrix is not square.
   */
  getDeterminant() {
    if (!this.isSquare()) throw new Error("Matrix must be square");
    const [row, col] = this.getDimensions();
    if (row === 1) return this.arr[0][0];
    if (row === 2)
      return this.arr[0][0] * this.arr[1][1] - this.arr[0][1] * this.arr[1][0];
    let determinant = 0;
    for (let i = 0; i < row; i++) {
      determinant += this.arr[0][i] * this.getCofactor(0, i);
    }
    return determinant;
  }

  /**
   * Get the inverse of the matrix.
   * @returns {Matrix} The inverse of the matrix.
   * @throws Will throw an error if the matrix is not square or if the matrix is singular.
   */
  getInverse() {
    if (!this.isSquare()) throw new Error("Matrix must be square");
    const determinant = this.getDeterminant();
    if (determinant === 0) throw new Error("Matrix is singular");
    const [row, col] = this.getDimensions();
    if (row === 1) return new Matrix([[1 / this.arr[0][0]]]);
    /**
     * @type {number[][]}
     */
    const inverse = Array.from({ length: row }, () => Array(col).fill(0));
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        inverse[i][j] = this.getCofactor(j, i) / determinant;
      }
    }
    return new Matrix(inverse);
  }

  /**
   * Get the adjoint of the matrix.
   * @returns {Matrix} The adjoint of the matrix.
   * @throws Will throw an error if the matrix is not square.
   */
  getAdjoint() {
    if (!this.isSquare()) throw new Error("Matrix must be square");
    const [row, col] = this.getDimensions();
    if (row === 1) return new Matrix([[1]]);
    /**
     * @type {number[][]}
     */
    const adjoint = Array.from({ length: row }, () => Array(col).fill(0));
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        adjoint[i][j] = this.getCofactor(j, i);
      }
    }
    return new Matrix(adjoint);
  }
}

const matrix1 = new Matrix([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

const matrix2 = new Matrix([
  [1, 2, 3, 7],
  [4, 5, 6, 8],
  [7, 8, 9, 3],
  [1, 2, 3, 2],
]);

console.log(matrix1.getLeadingDiagonal());
console.log(matrix1.getEntriesBelowLeadingDiagonal());
console.log(matrix1.getEntriesAboveLeadingDiagonal());
