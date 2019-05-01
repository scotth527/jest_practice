const caesar = require('./caesarCipher');

test('three rotation', () => {
  expect(caesar('a', 3 )).toMatch('d');
});

test('wrapping ', () => {
  expect(caesar('z',1)).toMatch('a');
});

test('uppercase ', () => {
  expect(caesar('Z',1)).toMatch('A');
});

test('punctuation ', () => {
  expect(caesar('Z/Z/a',1)).toMatch('A/A/b');
});
