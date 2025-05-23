export default function createElement(elementType, props, ...children) {
  const element = document.createElement(elementType)

  for (const [prop, value] of Object.entries(props)) {
    if (/^data/.test(prop)) {
      element.setAttribute(prop, value)
    } else if (value !== null) {
      element[prop] = value
    }
  }

  for (let node of children) {
    if (typeof node === 'string') {
      node = document.createTextNode(node)
    }

    element.appendChild(node)
  }

  return element
}
