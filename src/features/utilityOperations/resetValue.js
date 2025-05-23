import handleCurrentValue from '../handleCurrentValue.js'
import handleLocalStorage from '../../utils/handleLocalStorage.js'
import { initValue } from '../../components/calculator/display'

export default function resetValue() {
  const { update } = handleCurrentValue()
  const { cleareStorage } = handleLocalStorage()

  update(initValue)
  cleareStorage()
}
