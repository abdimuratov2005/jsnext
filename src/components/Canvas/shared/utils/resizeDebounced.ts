export const resizeDebounced = (func: () => void) => {
  let timer: any;
  return () => {
    timer && clearTimeout(timer);
    timer = setTimeout(func, 300)
  }
}