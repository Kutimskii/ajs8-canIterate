import canIterate from '../canIterate';

test('test canIterate witn array', () => {
  const arr = [1, 2, 3, 4, 5, 6, 8];
  const result = canIterate(arr);
  expect(result).toBe(true);
});

test('test canIterate witn obj', () => {
  const obj = { a: 3, b: 2, c: 4 };
  const result = canIterate(obj);
  expect(result).toBe(false);
});
test('test canIterate witn num', () => {
  const obj = 'steam';
  const result = canIterate(obj);
  expect(result).toBe(true);
});
