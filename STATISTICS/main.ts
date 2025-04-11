function validateData(arr: number[]): void {
	if (arr.length === 0) throw new Error("Array must not be empty");
	if (arr.some((value) => typeof value !== "number")) {
		throw new Error("Array must contain only integers");
	}
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
	validateData(arr);
	const frequencyMap: Record<number, number> = {};
	arr.forEach((num) => {
		frequencyMap[num] = (frequencyMap[num] || 0) + 1;
	});

	const maxFrequency = Math.max(...Object.values(frequencyMap));
	return Object.keys(frequencyMap)
		.filter((key) => frequencyMap[Number(key)] === maxFrequency)
		.map(Number);
}

function getRange(arr: number[]): number {
	validateData(arr);
	return Math.max(...arr) - Math.min(...arr);
}

function table(arr: number[]) {
	validateData(arr);

	const frequencyMap: Record<number, number> = {};
	arr.forEach((num) => {
		frequencyMap[num] = (frequencyMap[num] || 0) + 1;
	});

	const values = Object.keys(frequencyMap).map(Number);
	const frequency = Object.values(frequencyMap);
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
