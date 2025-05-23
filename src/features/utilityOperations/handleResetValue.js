import handleCurrentValue from '../handleCurrentValue.js'
import handleLocalStorage from '../../utils/handleLocalStorage.js'
import handleMathOperationsRow from '../handleMathOperationsRow.js'
import { initValue } from '../../components/calculator/display/index.js'

export default function handleResetValue() {
  const { update } = handleCurrentValue()
  const { cleareStorage } = handleLocalStorage()
  const { updateMathRow } = handleMathOperationsRow()

  update(initValue)
  updateMathRow('')
  cleareStorage()
}
