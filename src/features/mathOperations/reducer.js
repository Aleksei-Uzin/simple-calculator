import calcResult from './calcResult.js'
import handleMathOperation from '../handleMathOperation.js'

export default function reducer(operation) {
  switch (operation) {
    case 'divide':
      handleMathOperation('/')
      break
    case 'multiply':
      handleMathOperation('*')
      break
    case 'subtruct':
      handleMathOperation('-')
      break
    case 'add':
      handleMathOperation('+')
      break
    case 'result':
      calcResult()
  }
}

reducer.operations = ['divide', 'multiply', 'subtruct', 'add', 'result']
