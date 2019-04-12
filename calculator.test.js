const calculator = require('./calculator');

test('adding integersnumbers', () => {
  expect(calculator.sum(4, 4)).toBe(8);
});

test('adding numbers', () => {
  expect(calculator.sum(3.4, 4)).toBeCloseTo(7.4);
});

test('subtracting integers', () => {
  expect(calculator.subtract(-7, -3)).toBe(-4);
});

test('adding numbers', () => {
  expect(calculator.sum(4.0, 3.4)).toBeCloseTo(7.4);
});
