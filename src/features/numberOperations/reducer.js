import constructNumber from './constructNumber.js'
import constructFloatNumber from './constructFloatNumber.js'

export default function reducer(operation) {
  if (/^[0-9]$/.test(operation)) {
    constructNumber(operation)
  } else if (operation === 'period') {
    constructFloatNumber()
  }
}

reducer.operations = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'period']
