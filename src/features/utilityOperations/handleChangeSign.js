import handleCurrentValue from '../handleCurrentValue.js'

export default function handleChangeSign() {
  const { currentValue, update } = handleCurrentValue()
  let newValue = ''

  if (/^\d/.test(currentValue)) {
    newValue = `-${currentValue}`
  } else {
    newValue = currentValue.slice(1)
  }

  update(newValue)
}
