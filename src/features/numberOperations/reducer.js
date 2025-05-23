import handleConstructNumber from './handleConstructNumber.js'
import handleConstructFloatNumber from './handleConstructFloatNumber.js'

export default function reducer(operation) {
  if (/^[0-9]$/.test(operation)) {
    handleConstructNumber(operation)
  } else if (operation === 'period') {
    handleConstructFloatNumber()
  }
}

reducer.operations = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'period']
