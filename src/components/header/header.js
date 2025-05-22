import createElement from 'utils/createElement'

const HEADER_CONTENT = 'Web Calculator for simple math operations'

export function getHeader() {
  return createElement('h1', {}, HEADER_CONTENT)
}
