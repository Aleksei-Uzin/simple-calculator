import reducer from '../features'

export default function handleButtonClick(event) {
  const buttonValue = event.target.dataset.value
  reducer(buttonValue)
}
