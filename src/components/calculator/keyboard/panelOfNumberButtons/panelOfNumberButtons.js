import createElement from 'utils/createElement'
import { getListOfButtons } from '../listOfButtons/index.js'
import { BUTTONS } from './constants.js'

export function getPanelOfNumberButtons() {
  const panel = createElement('div', { className: 'number-panel' })

  for (let buttonsRow of BUTTONS) {
    const list = getListOfButtons(buttonsRow, { className: 'number-panel-list' })
    panel.appendChild(list)
  }

  return panel
}
