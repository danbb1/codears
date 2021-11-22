/* eslint-disable class-methods-use-this */
class Calculator {
  constructor() {
    this.operators = {
      '+': (x, y) => x + y,
      '-': (x, y) => x - y,
      '/': (x, y) => x / y,
      '*': (x, y) => x * y
    } 
  }

  evaluate(string) {
    const splitString = string.split(" ")
    const operandsStack = splitString.filter(el => el.match(/[/*]/))
    operandsStack.push(...splitString.filter(el => el.match(/[+-]/)))

    operandsStack.forEach((operand, index) => {
      const firstOcurrence = splitString.findIndex(i => i === operand)
      const firstNumber = Number(splitString[firstOcurrence - 1])
      const secondNumber = Number(splitString[firstOcurrence + 1])
      const sum = this.operators[operand](firstNumber, secondNumber)

      splitString.splice(firstOcurrence - 1, 3, sum)
    });
    return Number(splitString.join(""))
  }
}

const calculate = new Calculator()

// console.log(calculate.evaluate('127'))
console.log(calculate.evaluate('2 + 3'))
// console.log(calculate.evaluate('2 - 3 - 4'))
// console.log(calculate.evaluate('10 * 5 / 2'))