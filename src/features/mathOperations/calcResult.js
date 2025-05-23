import handleCurrentValue from '../handleCurrentValue.js'
import handleLocalStorage from '../../utils/handleLocalStorage.js'
import handleMathOperationsRow from '../handleMathOperationsRow.js'
import calc from './utils/calc.js'

export default function calcResult() {
  const { currentValue, update } = handleCurrentValue()
  const { getStorage, cleareStorage, updateStorage } = handleLocalStorage()
  const { updateMathRow } = handleMathOperationsRow()

  updateStorage(currentValue)

  const operationsArr = getStorage()
  const result = calc(operationsArr)

  update(result)
  updateMathRow('')
  cleareStorage()
}
