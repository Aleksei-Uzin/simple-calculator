import createElement from 'utils/createElement'

export const initValue = '0'

export function getDisplay() {
  return createElement('div', { className: 'display', id: 'display', 'data-value': initValue }, initValue)
}
