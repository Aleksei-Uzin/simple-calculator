import handleResetValue from './handleResetValue.js'
import handleChangeSign from './handleChangeSign.js'

export default function reducer(operation) {
  switch (operation) {
    case 'reset':
      handleResetValue()
      break
    case 'sign':
      handleChangeSign()
      break
    case 'mod':
  }
}

reducer.operations = ['reset', 'sign', 'mod']
