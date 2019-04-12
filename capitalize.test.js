const capitalize = require('./capitalize');

test('makes first letter capital', () => {
  expect(capitalize("fake")).toBe("Fake");
});

test('ignores non letter', () => {
  expect(capitalize("!what")).toBe("!what");
});
