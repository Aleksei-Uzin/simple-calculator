export default function handleMathOperationsRow() {
  const displayElement = document.getElementById('display-second-row')

  const updateMathRow = newValue => {
    displayElement.textContent = newValue.slice(-25)
  }

  return { updateMathRow }
}
