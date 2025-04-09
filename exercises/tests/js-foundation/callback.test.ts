import { getUserById } from '../../src/js-foundation/callback';

describe('js-foundation/callback', () => {
    test('getUserById should return user not found', (done) => {
        const id: number = 10;

        getUserById(id, (error, user) => {
            expect(error).toBe(`User not found with id ${id}`)
            expect(user).toBeUndefined()

            done()
        })
    })

    test('getUserById should return user found', (done) => {
        const id: number = 1;

        getUserById(id, (error, user) => {
            expect(error).toBeUndefined()
            expect(user).toEqual({
                id: 1,
                name: 'John Doe'
            })

            done()
        })
    })
})