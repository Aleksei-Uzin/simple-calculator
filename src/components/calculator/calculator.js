import { getDisplay } from './display'
import { getKeyboard } from './keyboard'

import createElement from 'utils/createElement'

export function getCalculator() {
  const display = getDisplay()
  const keyboard = getKeyboard()

  return createElement('div', { className: 'calculator' }, display, keyboard)
}
