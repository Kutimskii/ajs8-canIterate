export default function canIterate(arg) {
  return typeof arg[Symbol.iterator] === 'function';
}
