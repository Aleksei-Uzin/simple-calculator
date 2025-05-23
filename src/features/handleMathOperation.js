import handleCurrentValue from './handleCurrentValue.js'
import handleLocalStorage from '../utils/handleLocalStorage'
import handleMathOperationsRow from './handleMathOperationsRow.js'
import { initValue } from '../components/calculator/display'

export default function handleMathOperation(mathOperation) {
  const { currentValue, update } = handleCurrentValue()
  const { getStorage, updateStorage } = handleLocalStorage()
  const { updateMathRow } = handleMathOperationsRow()

  updateStorage(currentValue, mathOperation)
  update(initValue)
  updateMathRow(getStorage().join(''))
}
