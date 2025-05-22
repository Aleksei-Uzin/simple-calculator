import { getPanelOfUtilityButtons } from './panelOfUtilityButtons'
import { getPanelOfMathButtons } from './panelOfMathButtons'
import { getPanelOfNumberButtons } from './panelOfNumberButtons'

export function getKeyboard() {
  const children = [getPanelOfUtilityButtons(), getPanelOfMathButtons(), getPanelOfNumberButtons()]
  const keyboard = new DocumentFragment()

  for (const node of children) {
    keyboard.append(node)
  }

  return keyboard
}
