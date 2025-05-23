import handleCurrentValue from '../handleCurrentValue.js'

export default function constructNumber(numb) {
  const { currentValue, update } = handleCurrentValue()
  let newValue = ''

  if(currentValue.length === 10) {
    return
  }

  if (/^0$/.test(currentValue)) {
    newValue = numb
  } else if (/^-0$/.test(currentValue)) {
    newValue = `-${numb}`
  } else {
    newValue = `${currentValue}${numb}`
  }

  update(newValue)
}
