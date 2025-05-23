import handleResetValue from './handleResetValue.js'
import handleChangeSign from './handleChangeSign.js'
import handlePercentage from './handlePercentage.js'

export default function reducer(operation) {
  switch (operation) {
    case 'reset':
      handleResetValue()
      break
    case 'sign':
      handleChangeSign()
      break
    case 'mod':
      handlePercentage()
  }
}

reducer.operations = ['reset', 'sign', 'mod']
