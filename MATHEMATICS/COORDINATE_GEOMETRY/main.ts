function calculateDistance(
	x1: number,
	y1: number,
	x2: number,
	y2: number
): number {
	return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

function findMidpoint(
	x1: number,
	y1: number,
	x2: number,
	y2: number
): { x: number; y: number } {
	return { x: (x1 + x2) / 2, y: (y1 + y2) / 2 };
}
function findSlope(x1: number, y1: number, x2: number, y2: number): number {
	if (x2 - x1 === 0) {
		throw new Error("Slope is undefined for vertical lines.");
	}
	return (y2 - y1) / (x2 - x1);
}

function findLineEquation(
	x1: number,
	y1: number,
	x2: number,
	y2: number
): string {
	const slope = findSlope(x1, y1, x2, y2);
	const intercept = y1 - slope * x1;
	return `y = ${slope}x + ${intercept}`;
}

const x1 = 1,
	y1 = 2,
	x2 = 4,
	y2 = 6;
console.log("Distance:", calculateDistance(x1, y1, x2, y2));
console.log("Midpoint:", findMidpoint(x1, y1, x2, y2));
console.log("Slope:", findSlope(x1, y1, x2, y2));
console.log("Line Equation:", findLineEquation(x1, y1, x2, y2));
