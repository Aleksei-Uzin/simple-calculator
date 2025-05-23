import createElement from 'utils/createElement'

export const initValue = '0'

export function getDisplay() {
  const row1 = createElement('div', { className: 'display-second-row', id: 'display-second-row' })
  const row2 = createElement(
    'div',
    { className: 'display-main-row', id: 'display-main-row', 'data-value': initValue },
    initValue,
  )
  return createElement('div', { className: 'display' }, row1, row2)
}
