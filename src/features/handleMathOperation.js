import handleCurrentValue from './handleCurrentValue.js'
import handleLocalStorage from '../utils/handleLocalStorage'
import { initValue } from '../components/calculator/display'

export default function handleMathOperation(mathOperation) {
  const { currentValue, update } = handleCurrentValue()
  const { updateStorage } = handleLocalStorage()

  updateStorage(currentValue, mathOperation)
  update(initValue)
}
