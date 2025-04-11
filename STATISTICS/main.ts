function validateData(arr: number[]): void {
	if (arr.length === 0) throw new Error("Array must not be empty");
	if (arr.some((value) => typeof value !== "number")) {
		throw new Error("Array must contain only integers");
	}
}

function calculateFrequency(arr: number[]): Map<number, number> {
	const frequencyMap = new Map<number, number>();
	arr.forEach((num) => {
		frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
	});
	return frequencyMap;
}

function getMedian(arr: number[]): number {
	validateData(arr);
	const sortedArr = [...arr].sort((a, b) => a - b);
	const mid = Math.floor(sortedArr.length / 2);

	if (sortedArr.length % 2 === 0) {
		return (sortedArr[mid - 1] + sortedArr[mid]) / 2;
	} else {
		return sortedArr[mid];
	}
}

function getMean(arr: number[]): number {
	validateData(arr);
	const sum = arr.reduce((acc, cur) => acc + cur, 0);
	return sum / arr.length;
}

function getMode(arr: number[]): number[] {
	const frequencyMap = calculateFrequency(arr);
	const maxFrequency = Math.max(...frequencyMap.values());
	return Array.from(frequencyMap.entries())
		.filter(([_, freq]) => freq === maxFrequency)
		.map(([num]) => num);
}

function getRange(arr: number[]): number {
	validateData(arr);
	return Math.max(...arr) - Math.min(...arr);
}

function table(arr: number[]) {
	validateData(arr);
	const frequencyMap = calculateFrequency(arr);

	const values = Array.from(frequencyMap.keys());
	const frequency = Array.from(frequencyMap.values());
	const fx = values.map((value, index) => value * frequency[index]);

	return { values, frequency, fx };
}

const numbArr = [
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2,
	2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 4, 9, 9, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 2, 2, 3, 3, 9, 9, 9, 3, 3, 4, 5, 5, 5, 5, 5,
	6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9,
];

console.log(
	`The mean of the collection is: ${getMean(numbArr).toPrecision(3)}`
);
console.log(`The median of the collection is: ${getMedian(numbArr)}`);
console.log(`The mode(s) of the collection is: ${getMode(numbArr).join(", ")}`);
console.log(`The range of the collection is: ${getRange(numbArr)}`);
console.table(table(numbArr));
