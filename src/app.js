import { getCalculator, getFooter, getHeader } from './components'

import './styles/reset.css'
import './styles/style.css'

document.addEventListener('DOMContentLoaded', () => {
  const header = getHeader()
  const calculator = getCalculator()
  const footer = getFooter()

  document.body.append(header, calculator, footer)
})
