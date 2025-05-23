export default function sanitizeResult(result) {
  result = result.toString()

  if (result.length > 10) {
    result = result.slice(0, 10)
    result = result.replace(/(\.[1-9]*)0+$/, '$1')
    return result
  } else {
    return result
  }
}
