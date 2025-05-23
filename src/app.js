import { getCalculator, getHeader } from './components'

import './styles/reset.css'
import './styles/style.css'

document.addEventListener('DOMContentLoaded', () => {
  const header = getHeader()
  const calculator = getCalculator()

  document.body.append(header, calculator)
})
