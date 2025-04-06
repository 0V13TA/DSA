/**
 * A function that implements the binary search recursively
 * @param {number[]} arr - The array to search in (can be unsorted)
 * @param {number} value - The value to search for
 * @returns {number | null} - Returns the value if found, otherwise null
 */
function binarySearch(arr, value) {
	// Sort the array in ascending order
	arr = arr.slice().sort((a, b) => a - b); // Use slice to avoid mutating the original array

	// Recursive helper function
	function search(left, right) {
		if (left > right) {
			return null; // Base case: value not found
		}

		const midpoint = Math.floor((left + right) / 2);

		if (arr[midpoint] === value) {
			return arr[midpoint]; // Value found
		} else if (arr[midpoint] < value) {
			return search(midpoint + 1, right); // Search in the right half
		} else {
			return search(left, midpoint - 1); // Search in the left half
		}
	}

	// Start the recursive search
	return search(0, arr.length - 1);
}

const arr = [9, 7, 5, 3, 1, 0, 2, 4, 6, 8]; // Unsorted array
console.log(binarySearch(arr, 0)); // Output: 0
console.log(binarySearch(arr, 10)); // Output: null
