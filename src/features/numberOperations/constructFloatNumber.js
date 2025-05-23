import handleCurrentValue from '../handleCurrentValue.js'

export default function constructFloatNumber() {
  const { currentValue, update } = handleCurrentValue()

  if (/^-?\d+$/.test(currentValue) && currentValue.length < 9) {
    update(`${currentValue}.`)
  }
}
