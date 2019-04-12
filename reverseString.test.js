const reverse = require('./reverseString');

test('makes first letter capital', () => {
  expect(reverse("fake")).toBe("ekaf");
});
