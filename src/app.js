import { getCalculator, getHeader } from './components'

import './styles/reset.css'
import './styles/style.css'

document.body.append(getHeader(), getCalculator())
