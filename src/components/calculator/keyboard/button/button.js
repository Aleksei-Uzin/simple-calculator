import createElement from 'utils/createElement'

const BUTTON_PARAMS = {
  type: 'button',
}

export function getButton(content = '', params = {}) {
  const buttonParams = Object.assign(params, BUTTON_PARAMS)
  const button = createElement('button', buttonParams, content)

  return button
}
