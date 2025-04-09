describe('App', () => {
    test('should be 30', () => {
        // 1. arrange
        const number1 = 10
        const number2 = 20

        // 2. act
        const result = number1 + number2

        // 3. assert
        expect(result).toBe(30)
    })
})