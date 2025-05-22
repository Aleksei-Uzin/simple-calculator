import createElement from 'utils/createElement'
import { getButton } from '../button'

export function getListOfButtons(buttonsArr = [], listProps = {}) {
  const buttons = buttonsArr.map(({ name, value }) => {
    const button = getButton(name, { 'data-value': value })
    const li = createElement('li', {}, button)

    return li
  })

  const list = createElement('ul', listProps, ...buttons)

  return list
}
