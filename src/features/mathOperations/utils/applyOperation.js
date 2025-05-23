export default function applyOperation(operator, a, b) {
  a = parseFloat(a)
  b = parseFloat(b)

  switch (operator) {
    case '*':
      return a * b
    case '/':
      return b === 0 ? NaN : a / b // Handle division by zero
    case '%':
      return b === 0 ? NaN : a % b // Handle modulo by zero
    case '+':
      return a + b
    case '-':
      return a - b
    default:
      return NaN // Should not happen
  }
}
