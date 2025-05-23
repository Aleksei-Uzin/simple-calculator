import resetValue from './resetValue'
import changeSign from './changeSign'
import handleMathOperation from '../handleMathOperation'

export default function reducer(operation) {
  switch (operation) {
    case 'reset':
      resetValue()
      break
    case 'sign':
      changeSign()
      break
    case 'mod':
      handleMathOperation('%')
  }
}

reducer.operations = ['reset', 'sign', 'mod']
