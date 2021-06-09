export function debouce(func, delay = 100) {
  let timer = null
  return function (...args) {
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      fun(...args)
    }, delay)
  }
}
