const analyze = require('./analyzeArray');

const object = analyze([2,4,6,8])

test('length', () => {
  expect(object.length).toBe(4);
});

test('min', () => {
  expect(object.min).toBe(2);
});

test('max', () => {
  expect(object.max).toBe(8);
});

test('sum', () => {
  expect(object.sum).toBe(20);
});

test('average', () => {
  expect(object.average).toBe(5);
});
