import utilityReducer from './utilityOperations'
import numberReducer from './numberOperations'
import mathRedecer from './mathOperations'

export default function reducer(operation) {
  if (utilityReducer.operations.includes(operation)) {
    utilityReducer(operation)
  } else if (numberReducer.operations.includes(operation)) {
    numberReducer(operation)
  } else if (mathRedecer.operations.includes(operation)) {
    mathRedecer(operation)
  } else {
    console.error(`Unknown operation: ${operation}`)
  }
}
