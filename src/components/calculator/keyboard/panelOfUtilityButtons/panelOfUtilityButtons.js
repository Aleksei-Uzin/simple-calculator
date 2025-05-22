import createElement from 'utils/createElement'
import { getListOfButtons } from '../listOfButtons/index.js'
import { BUTTONS } from './constants.js'

export function getPanelOfUtilityButtons() {
  const list = getListOfButtons(BUTTONS, { className: 'utility-panel-list' })

  return createElement('div', { className: 'utility-panel' }, list)
}
