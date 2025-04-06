const expression = "2 + 3 * 1 - 4";
const precedence = { "^": 3, "/": 2, "*": 2, "+": 1, "-": 1 };
const token = expressionToToken(expression);
const reversePolishNotation = convertToRPN(token);
const answer = solveRPN(reversePolishNotation);

function expressionToToken(expression) {
  return expression.split(" ");
}

/**
 * A function that converts an expression to the reverse polish notation
 *
 * @param {String[]} expression
 * @returns An Array sorted using the Reverse Polish Notation(RPN)
 */
function convertToRPN(expression) {
  const holdingStack = [];
  const output = [];

  expression.forEach((value) => {
    if (!precedence[value]) output.push(value);
    else {
      while (
        holdingStack.length > 0 &&
        precedence[holdingStack[holdingStack.length - 1]] >= precedence[value]
      ) {
        output.push(holdingStack.pop());
      }
      holdingStack.push(value);
    }
  });

  while (holdingStack.length > 0) {
    output.push(holdingStack.pop());
  }

  return output;
}

/**
 * A function that solves an expression arranged using the reverse polish notation
 *
 * @param {string[]} RPN
 * @returns A number
 */
function solveRPN(RPN) {
  const stack = [];

  RPN.forEach((value) => {
    if (!precedence[value]) {
      stack.push(Number(value));
    } else {
      const secondNumber = stack.pop();
      const firstNumber = stack.pop();

      switch (value) {
        case "^":
          stack.push(Math.pow(firstNumber, secondNumber));
          break;

        case "/":
          stack.push(firstNumber / secondNumber);
          break;

        case "*":
          stack.push(firstNumber * secondNumber);
          break;

        case "+":
          stack.push(firstNumber + secondNumber);
          break;

        case "-":
          stack.push(firstNumber - secondNumber);
          break;
      }
    }
  });

  return stack[0];
}

console.log(reversePolishNotation);
console.log(answer);
