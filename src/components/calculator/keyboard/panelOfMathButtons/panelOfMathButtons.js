import createElement from 'utils/createElement'
import { getListOfButtons } from '../listOfButtons/index.js'
import { BUTTONS } from './constants.js'

export function getPanelOfMathButtons() {
  const list = getListOfButtons(BUTTONS, { className: 'math-panel-list' })

  return createElement('div', { className: 'math-panel' }, list)
}
