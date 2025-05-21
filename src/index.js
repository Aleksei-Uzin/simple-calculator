import Print from './print'

import './styles/reset.css'
import './styles/style.css'


const a = 555




function component() {
  const element = document.createElement('h1')

  element.innerHTML = 'Simple Calculator'
  element.classList.add("box");

  element.onclick = Print.bind(null, 'simple calculator')

  return element
}

document.body.appendChild(component())
