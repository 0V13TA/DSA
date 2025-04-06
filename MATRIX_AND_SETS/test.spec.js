import { describe, it, expect } from "vitest";
import { Matrix } from "./Matrix";
import { ExtendedSet } from "./ExtendedSet";
import { Vector } from "./Vector";

describe("Matrix Class", () => {
  it("should create a valid matrix", () => {
    const matrix = new Matrix([
      [1, 2],
      [3, 4],
    ]);
    expect(matrix.arr).toEqual([
      [1, 2],
      [3, 4],
    ]);
  });

  it("should throw an error for invalid matrix input", () => {
    expect(() => new Matrix([])).toThrow("Value must be a non-empty array");
    expect(() => new Matrix([1, 2, 3])).toThrow("Array must be a 2D array");
    expect(
      () =>
        new Matrix([
          [1, 2],
          [3, "a"],
        ])
    ).toThrow("All elements must be numbers");
  });

  it("should check if the matrix is square", () => {
    const matrix = new Matrix([
      [1, 2],
      [3, 4],
    ]);
    expect(matrix.isSquare()).toBe(true);
    const nonSquareMatrix = new Matrix([
      [1, 2, 3],
      [4, 5, 6],
    ]);
    expect(nonSquareMatrix.isSquare()).toBe(false);
  });

  it("should check if the matrix is a null matrix", () => {
    const nullMatrix = new Matrix([
      [0, 0],
      [0, 0],
    ]);
    expect(nullMatrix.isNullMatrix()).toBe(true);
    const nonNullMatrix = new Matrix([
      [1, 0],
      [0, 0],
    ]);
    expect(nonNullMatrix.isNullMatrix()).toBe(false);
  });

  it("should add two matrices", () => {
    const matrixA = new Matrix([
      [1, 2],
      [3, 4],
    ]);
    const matrixB = new Matrix([
      [5, 6],
      [7, 8],
    ]);
    const result = matrixA.plus(matrixB);
    expect(result.arr).toEqual([
      [6, 8],
      [10, 12],
    ]);
  });

  it("should calculate the determinant of a matrix", () => {
    const matrix = new Matrix([
      [1, 2],
      [3, 4],
    ]);
    expect(matrix.getDeterminant()).toBe(-2);
  });

  it("should calculate the inverse of a matrix", () => {
    const matrix = new Matrix([
      [4, 7],
      [2, 6],
    ]);
    const inverse = matrix.getInverse();
    expect(inverse.arr).toEqual([
      [0.6, -0.7],
      [-0.2, 0.4],
    ]);
  });
});

describe("ExtendedSet Class", () => {
  it("should create a valid ExtendedSet", () => {
    const set = new ExtendedSet([1, 2, 3]);
    expect([...set]).toEqual([1, 2, 3]);
  });

  it("should return the union of two sets", () => {
    const setA = new ExtendedSet([1, 2]);
    const setB = new ExtendedSet([2, 3]);
    const unionSet = setA.union(setB);
    expect([...unionSet]).toEqual([1, 2, 3]);
  });

  it("should return the intersection of two sets", () => {
    const setA = new ExtendedSet([1, 2, 3]);
    const setB = new ExtendedSet([2, 3, 4]);
    const intersectionSet = setA.intersection(setB);
    expect([...intersectionSet]).toEqual([2, 3]);
  });

  it("should return the difference of two sets", () => {
    const setA = new ExtendedSet([1, 2, 3]);
    const setB = new ExtendedSet([2, 3, 4]);
    const differenceSet = setA.difference(setB);
    expect([...differenceSet]).toEqual([1]);
  });
});

describe("Vector Class", () => {
  it("should create a valid vector", () => {
    const vector = new Vector([1, 2, 3]);
    expect(vector.arr).toEqual([1, 2, 3]);
  });

  it("should add two vectors", () => {
    const vectorA = new Vector([1, 2, 3]);
    const vectorB = new Vector([4, 5, 6]);
    const result = vectorA.add(vectorB);
    expect(result.arr).toEqual([5, 7, 9]);
  });

  it("should calculate the dot product of two vectors", () => {
    const vectorA = new Vector([1, 2, 3]);
    const vectorB = new Vector([4, 5, 6]);
    const dotProduct = vectorA.dotProduct(vectorB);
    expect(dotProduct).toBe(32);
  });

  it("should calculate the magnitude of a vector", () => {
    const vector = new Vector([3, 4]);
    expect(vector.magnitude()).toBe(5);
  });

  it("should normalize a vector", () => {
    const vector = new Vector([3, 4]);
    const normalized = vector.normalize();
    expect(normalized.arr).toEqual([0.6, 0.8]);
  });
});
