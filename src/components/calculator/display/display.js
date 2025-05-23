import createElement from 'utils/createElement'
import handleLocalStorage from 'utils/handleLocalStorage'

export const initValue = '0'

const ROW_1_PARAMS = { className: 'display-second-row', id: 'display-second-row' }

const ROW_2_PARAMS = { className: 'display-main-row', id: 'display-main-row', 'data-value': initValue }

export function getDisplay() {
  const { getStorage } = handleLocalStorage()
  const row1 = createElement('div', ROW_1_PARAMS, getStorage().join(''))
  const row2 = createElement('div', ROW_2_PARAMS, initValue)

  return createElement('div', { className: 'display' }, row1, row2)
}
