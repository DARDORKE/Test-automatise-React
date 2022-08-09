describe('Suite de tests', () => {
  test('Vrai est vrai', () => {
    expect(true).toBe(true);
  });

  test('Faux est faux', () => {
    expect(false).toBe(false);
  });
});

const sum = (x, y) => {
  return x + y;
};

test('Test individuel somme', () => {
  expect(sum(5, 8)).toBe(13);
});