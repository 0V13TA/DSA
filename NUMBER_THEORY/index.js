"use strict";
// Initialize Canvas
const canvas = document.createElement("canvas");
const context = canvas.getContext("2d");
document.body.appendChild(canvas);
canvas.width = innerWidth;
canvas.height = innerHeight;
// Center Position
let centerPositions = {
	x: canvas.width / 2,
	y: canvas.height / 2,
};
class Dot {
	constructor(x, y, radius, color, distanceFromCenter, angle) {
		this.radius = radius;
		this.color = color;
		this.velocity = 5;
		this.angle = angle;
		this.distanceFromCenter = distanceFromCenter;
		this.x = centerPositions.x + this.distanceFromCenter * Math.cos(this.angle);
		this.y = centerPositions.y + this.distanceFromCenter * Math.sin(this.angle);
		this.startTime = Date.now(); // Track the start time for smooth color transitions
	}
	draw() {
		context.beginPath();
		context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
		context.fillStyle = this.getColor(); // Use the dynamic color function
		context.fill();
		context.closePath();
	}
	animate() {
		this.draw();
		this.x = centerPositions.x + this.distanceFromCenter * Math.cos(this.angle);
		this.y = centerPositions.y + this.distanceFromCenter * Math.sin(this.angle);
	}
	getColor() {
		const elapsedTime = Date.now() - this.startTime; // Calculate elapsed time
		const hue = (elapsedTime / 10) % 360; // Smoothly cycle through hues
		const saturation = 50 + 50 * Math.sin(elapsedTime / 1000); // Oscillate saturation
		return `hsl(${hue}, ${saturation}%, 50%)`;
	}
}
// Resize Event Listener
addEventListener("resize", () => {
	canvas.width = innerWidth;
	canvas.height = innerHeight;
	centerPositions = {
		x: canvas.width / 2,
		y: canvas.height / 2,
	};
});
// Animation
generatePrime(10000).forEach((prime) => {
	const dot = new Dot(
		centerPositions.x,
		centerPositions.y,
		5,
		"red",
		prime,
		prime
	);
	dot.draw();
	console.table(dot);
});
function animate() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	requestAnimationFrame(animate);
}
/**
 * @param {number} number
 */
function isPrime(number) {
	if (number <= 1) return false;
	if (number === 2) return true;
	if (number % 2 === 0) return false;
	let isPrimeNumber = true;
	for (let i = 3; i * i <= number; i += 2) {
		if (number % i === 0) isPrimeNumber = false;
	}
	return isPrimeNumber;
}
/**
 * @param {number} numberOfPrimes
 */
function generatePrime(numberOfPrimes) {
	const primeNumberArrays = [];
	let number = 2;
	while (primeNumberArrays.length < numberOfPrimes) {
		if (isPrime(number)) {
			primeNumberArrays.push(number);
		}
		number++;
	}
	return primeNumberArrays;
}
