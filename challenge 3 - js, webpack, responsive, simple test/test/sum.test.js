// const functions = require('./functions');

// test('adds 1 + 2 to equal 3', () => {
//   expect(functions.sum(1, 2)).toBe(3);
// });

const sum = require('./functions');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});