export default function handleCurrentValue() {
  const displayElement = document.getElementById('display')
  const currentValue = displayElement.dataset.value

  const update = newValue => {
    displayElement.textContent = newValue
    displayElement.dataset.value = newValue
  }

  return { currentValue, update }
}
