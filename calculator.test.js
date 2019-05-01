const calculator = require('./calculator');

test('adding integers', () => {
  expect(calculator.sum(4, 4)).toBe(8);
});

test('adding floats', () => {
  expect(calculator.sum(3.4, 4)).toBeCloseTo(7.4);
});

test('subtracting integers', () => {
  expect(calculator.subtract(-7, -3)).toBe(-4);
});

test('subtracting floats', () => {
  expect(calculator.subtract(4.0, 3.4)).toBeCloseTo(0.6);
});

test('multiply integers', () => {
  expect(calculator.multiply(8, 4)).toBe(32);
});

test('multiply floats', () => {
  expect(calculator.multiply(-1.0, 8)).toBeCloseTo(-8.0);
});

test('divide integers', () => {
  expect(calculator.divide(-81, -9)).toBe(9);
});

test('divide floats', () => {
  expect(calculator.divide(-100.0, -10)).toBe(10.0);
});
