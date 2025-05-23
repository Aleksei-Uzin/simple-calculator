import createElement from 'utils/createElement'
import handleButtonClick from 'utils/handleButtonClick'

const BUTTON_PARAMS = {
  type: 'button',
}

export function getButton(content = '', params = {}) {
  const buttonParams = Object.assign(params, BUTTON_PARAMS)
  const button = createElement('button', buttonParams, content)
  button.addEventListener('click', handleButtonClick)

  return button
}
