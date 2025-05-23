import handleCurrentValue from '../handleCurrentValue.js'

export default function handlePercentage() {
  const { currentValue, update } = handleCurrentValue()
  const newValue = parseFloat(currentValue) / 100

  update(newValue)
}
