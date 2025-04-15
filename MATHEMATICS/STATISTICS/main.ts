//#region Statistics for ungrouped Data
function validateData(arr: number[]): void {
	if (arr.length === 0) throw new Error("Array must not be empty");
	if (arr.some((value) => typeof value !== "number")) {
		throw new Error("Array must contain only integers");
	}
}

function calculateFrequency(arr: number[]): Map<number, number> {
	const frequencyMap = new Map<number, number>();
	arr.forEach((num) => {
		frequencyMap.set(num, (frequencyMap.get(num) ?? 0) + 1);
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

function ungroupedTable(arr: number[]) {
	const median = getMedian(arr);
	const mean = getMean(arr);
	const mode = getMode(arr);
	const range = getRange(arr);

	console.table([
		{ Statistic: "mean", Value: mean },
		{ Statistic: "median", Value: median },
		{ Statistic: "mode", Value: mode },
		{ Statistic: "range", Value: range },
	]);
}

const numbArr = [
	1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2,
	2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 4, 4, 9, 9, 0, 0, 0,
	0, 0, 0, 0, 0, 0, 8, 8, 8, 8, 8, 2, 2, 3, 3, 9, 9, 9, 3, 3, 4, 5, 5, 5, 5, 5,
	6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 8, 8, 8, 9, 9, 9, 9,
];

console.log("=============================");
console.log("Statistics for ungrouped data");
console.log("=============================");
ungroupedTable(numbArr);
//#endregion

//#region  Statistics for Grouped Data
type arr = [number, number, number][];

function getMeanGD(arr: arr) {
	const HzM: number[] = [];
	let HzSum = 0;
	arr.forEach(([lB, UB, Hz]) => {
		const midpoint = (lB + UB) / 2;
		HzM.push(midpoint * Hz);
		HzSum += Hz;
	});

	const HzMSum = HzM.reduce((acc, cur) => acc + cur, 0);

	return HzMSum / HzSum;
}

function getModeGD(arr: arr) {
	const modalClass = [
		[0, 0, 0],
		[0, 0, 0],
		[0, 0, 0],
	];

	arr.forEach(([LB, UB, Hz], index) => {
		if (Hz > modalClass[1][2]) {
			if (index <= 0) modalClass[0] = [0, 0, 0];
			else modalClass[0] = arr[index - 1];

			modalClass[1] = [LB, UB, Hz];

			if (index >= arr.length - 1) modalClass[2] = [0, 0, 0];
			else modalClass[2] = arr[index + 1];
		}
	});

	const lowerBound = (modalClass[1][0] + modalClass[0][1]) / 2;
	const upperBound = (modalClass[1][1] + modalClass[2][0]) / 2;
	const classSize = upperBound - lowerBound;
	const HzM = modalClass[1][2];
	const HzL = modalClass[0][2];
	const HzU = modalClass[2][2];

	return lowerBound + classSize * ((HzM - HzL) / (2 * HzM - HzL - HzU));
}

function getMedianGD(arr: arr): number {
	const N = arr.reduce((sum, [, , Hz]) => sum + Hz, 0); // Total frequency
	let cumulativeFrequency = 0;
	let medianClassIndex = -1;

	// Find the median class
	for (let i = 0; i < arr.length; i++) {
		cumulativeFrequency += arr[i][2];
		if (cumulativeFrequency >= N / 2) {
			medianClassIndex = i;
			break;
		}
	}

	if (medianClassIndex === -1) throw new Error("Median class not found");

	const [LB, UB, f] = arr[medianClassIndex];
	const F = cumulativeFrequency - f; // Cumulative frequency before the median class
	const h = UB - LB; // Class width

	return LB + ((N / 2 - F) / f) * h;
}

function getVariance(arr: arr): number {
	const mean = getMeanGD(arr); // Mean of grouped data
	const N = arr.reduce((sum, [, , Hz]) => sum + Hz, 0); // Total frequency

	// Calculate Σ(f * (x - μ)^2)
	const varianceSum = arr.reduce((sum, [lB, UB, Hz]) => {
		const midpoint = (lB + UB) / 2;
		return sum + Hz * Math.pow(midpoint - mean, 2);
	}, 0);

	return varianceSum / N;
}

function getStandardDeviationGD(arr: arr): number {
	return Math.sqrt(getVariance(arr)); // Standard deviation
}

function groupedDataTable(arr: arr) {
	const mean = getMeanGD(arr);
	const mode = getModeGD(arr);
	const median = getMedianGD(arr);
	const variance = getVariance(arr);
	const standardDeviation = getStandardDeviationGD(arr);

	console.table([
		{ Statistic: "Mean", Value: mean },
		{ Statistic: "Median", Value: median },
		{ Statistic: "Mode", Value: mode },
		{ Statistic: "Variance", Value: variance },
		{ Statistic: "Standard Deviation", Value: standardDeviation },
	]);
}

const arrGD: arr = [
	[40, 49, 3],
	[50, 59, 5],
	[60, 69, 6],
	[70, 79, 9],
	[80, 89, 8],
	[90, 99, 7],
];

console.log("===========================");
console.log("Statistics for grouped data");
console.log("===========================");
groupedDataTable(arrGD);

//#endregion
