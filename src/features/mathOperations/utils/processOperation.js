import applyOperation from './applyOperation.js'

export default function processOperation(operators, arr) {
  for (let i = 1; i < arr.length; i += 2) {
    const leftOperand = arr[i - 1]
    const rightOperand = arr[i + 1]
    const operator = arr[i]

    if (operators.includes(operator)) {
      const result = applyOperation(operator, leftOperand, rightOperand)
      arr.splice(i - 1, 3, result)
    }
  }
}
