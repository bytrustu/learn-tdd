describe('Calclation', () => {
    test('two plus two is four', () => {
        expect(2 + 2).toBe(4);
    })

    test('two plus two not five', () => {
        expect(2 + 2).not.toBe(5);
    })
})

const mockFunction = jest.fn();

mockFunction('hello');
mockFunction();

expect(mockFunction).toBeCalledWith('hello');
expect(mockFunction).toBeCalledTimes(2);
