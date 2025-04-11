function validateData(arr: any[]) {
	if (arr.length === 0) return [false, "Array must not be empty"];
	if (arr.find((value) => typeof value !== "number")) {
		return [false, "Array must contain only integers"];
	}
	return [true, ""];
}

function getMedian(arr: number[]) {
	const [isValid, message] = validateData(arr);

	if (!isValid) throw new Error(<string>message);
	const arrangedArr = [...arr].sort((a, b) => a - b);

	if (arrangedArr.length % 2 === 0) {
		return (
			arrangedArr[arrangedArr.length / 2] +
			arrangedArr[arrangedArr.length / 2 + 1]
		);
	} else {
		return arrangedArr[Math.floor(arrangedArr.length / 2)];
	}
}

function getMean(arr: number[]) {
	const [isValid, message] = validateData(arr);

	if (!isValid) throw new Error(<string>message);

	const sum = arr.reduce((acc, cur) => acc + cur, 0);
	return sum / arr.length;
}

function getMode(arr: number[]) {
	const [isValid, message] = validateData(arr);

	if (!isValid) throw new Error(<string>message);

	const numbObj: any = {};
	const mode: number[] = [];
	arr.forEach((numb) => {
		if (numbObj[numb] !== undefined) {
			numbObj[numb]++;
		} else numbObj[numb] = 1;
	});
	const values = <number[]>Object.values(numbObj);
	const maxNumb = Math.max(...values);

	Object.keys(numbObj).forEach((numb) => {
		if (numbObj[numb] === maxNumb) mode.push(Number(numb));
	});

	return mode;
}

function getRange(arr: number[]) {
	const [isValid, message] = validateData(arr);

	if (!isValid) throw new Error(<string>message);

	return Math.max(...arr) - Math.min(...arr);
}

function table(arr: number[]) {
	const [isValid, message] = validateData(arr);

	if (!isValid) throw new Error(<string>message);

	const numbObj: any = {};
	const fx: number[] = [];
	arr.forEach((numb) => {
		if (numbObj[numb] !== undefined) {
			numbObj[numb]++;
		} else numbObj[numb] = 1;
	});
	const numbKeys = Object.keys(numbObj).map((numb) => Number(numb));

	numbKeys.forEach((numb) => {
		fx.push(numb * numbObj[numb]);
	});

	return {
		values: numbKeys,
		frequency: <number[]>Object.values(numbObj),
		fx: fx,
	};
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
