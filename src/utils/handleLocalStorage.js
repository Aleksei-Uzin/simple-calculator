export default function handleLocalStorage() {
  const key = 'mathOperations'

  const getStorage = () => {
    const valueInLocalStorage = window.localStorage.getItem(key)

    if (valueInLocalStorage) {
      return JSON.parse(valueInLocalStorage)
    } else {
      return []
    }
  }

  const cleareStorage = () => {
    window.localStorage.removeItem(key)
  }

  const updateStorage = (...args) => {
    const valueInLocalStorage = getStorage()
    valueInLocalStorage.push(...args)
    window.localStorage.setItem(key, JSON.stringify(valueInLocalStorage))
  }

  return { getStorage, cleareStorage, updateStorage }
}
