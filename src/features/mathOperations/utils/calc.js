import processOperation from './processOperation.js'
import sanitizeResult from './sanitizeResult.js'

export default function calc(operationsArr) {
  const arr = operationsArr.map(item => {
    const num = parseFloat(item)
    return isNaN(num) ? item : num
  })

  processOperation(['*', '/', '%'], arr)
  processOperation(['+', '-'], arr)

  return sanitizeResult(arr[0])
}
