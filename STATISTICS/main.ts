function getMedian(arr: number[]) {
	if (arr.length % 2 === 0) {
		return arr[arr.length / 2] + arr[arr.length / 2 + 1];
	} else {
		return arr[Math.floor(arr.length / 2)];
	}
}

function getMean(arr: number[]) {
	const sum = arr.reduce((acc, cur) => acc + cur);
	return sum / arr.length;
}

function getMode(arr: number[]) {
	const numbObj = {};
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

const getRange = (arr: number[]) => Math.max(...arr) - Math.min(...arr);

function table(arr: number[]) {
	const numbObj = {};
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

const numbArr = [1, 1, 1, 1, 2, 3];

console.log(
	`The mean of the collection is: ${getMean(numbArr).toPrecision(3)}`
);
console.log(`The median of the collection is: ${getMedian(numbArr)}`);
console.log(`The mode(s) of the collection is: ${getMode(numbArr).join(", ")}`);
console.log(`The range of the collection is: ${getRange(numbArr)}`);
console.table(table(numbArr));
