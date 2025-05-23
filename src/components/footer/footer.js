import createElement from 'utils/createElement'

const FOOTER_CONTENT = '© Copyright 2025 Aleksei Uzin'

export function getFooter() {
  return createElement('footer', { className: 'footer' }, FOOTER_CONTENT)
}
