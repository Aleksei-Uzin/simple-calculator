import handleCalcResult from './handleCalcResult.js'
import handleMathOperation from './handleMathOperation.js'

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
      handleCalcResult()
  }
}

reducer.operations = ['divide', 'multiply', 'subtruct', 'add', 'result']
