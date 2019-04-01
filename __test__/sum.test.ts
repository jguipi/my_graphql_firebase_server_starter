const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});

afterAll(() => setTimeout(() => console.log('Exit test'), 1000));
