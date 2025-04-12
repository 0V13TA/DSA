/**
 * Class representing a Vector.
 */
export class Vector {
  /**
   * Create a Vector.
   * @param {number[]} array - The array representing the vector.
   */
  constructor(array) {
    if (!Array.isArray(array) || array.length === 0)
      throw new Error("Value must be a non-empty array");

    if (array.some((num) => typeof num !== "number"))
      throw new Error("All elements must be numbers");

    this.arr = array;
  }

  /**
   * Get the dimensions of the vector.
   * @returns {number} The number of elements in the vector.
   */
  getDimensions() {
    return this.arr.length;
  }

  /**
   * Add another vector to this vector.
   * @param {Vector} vector - The vector to add.
   * @returns {Vector} The resulting vector after addition.
   * @throws Will throw an error if the input is not a Vector instance or if the vectors are not of the same dimension.
   */
  add(vector) {
    if (!(vector instanceof Vector))
      throw new Error("Value must be of type Vector");

    if (this.getDimensions() !== vector.getDimensions())
      throw new Error("Vectors must be of the same dimension");

    const newArr = this.arr.map((num, index) => num + vector.arr[index]);
    return new Vector(newArr);
  }

  /**
   * Subtract another vector from this vector.
   * @param {Vector} vector - The vector to subtract.
   * @returns {Vector} The resulting vector after subtraction.
   * @throws Will throw an error if the input is not a Vector instance or if the vectors are not of the same dimension.
   */
  subtract(vector) {
    if (!(vector instanceof Vector))
      throw new Error("Value must be of type Vector");

    if (this.getDimensions() !== vector.getDimensions())
      throw new Error("Vectors must be of the same dimension");

    const newArr = this.arr.map((num, index) => num - vector.arr[index]);
    return new Vector(newArr);
  }

  /**
   * Multiply the vector by a scalar.
   * @param {number} scalar - The scalar to multiply by.
   * @returns {Vector} The resulting vector after scalar multiplication.
   * @throws Will throw an error if the input is not a number.
   */
  multiplyByScalar(scalar) {
    if (typeof scalar !== "number") throw new Error("Value must be a number");

    const newArr = this.arr.map((num) => num * scalar);
    return new Vector(newArr);
  }

  /**
   * Calculate the dot product of this vector and another vector.
   * @param {Vector} vector - The vector to calculate the dot product with.
   * @returns {number} The dot product of the two vectors.
   * @throws Will throw an error if the input is not a Vector instance or if the vectors are not of the same dimension.
   */
  dotProduct(vector) {
    if (!(vector instanceof Vector))
      throw new Error("Value must be of type Vector");

    if (this.getDimensions() !== vector.getDimensions())
      throw new Error("Vectors must be of the same dimension");

    return this.arr.reduce(
      (acc, num, index) => acc + num * vector.arr[index],
      0
    );
  }

  /**
   * Calculate the magnitude of the vector.
   * @returns {number} The magnitude of the vector.
   */
  magnitude() {
    return Math.sqrt(this.arr.reduce((acc, num) => acc + num * num, 0));
  }

  /**
   * Normalize the vector.
   * @returns {Vector} The normalized vector.
   */
  normalize() {
    const magnitude = this.magnitude();
    if (magnitude === 0) throw new Error("Cannot normalize a zero vector");

    const newArr = this.arr.map((num) => num / magnitude);
    return new Vector(newArr);
  }
}
