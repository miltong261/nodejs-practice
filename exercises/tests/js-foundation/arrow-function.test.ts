import { getUserById } from "../../src/js-foundation/arrow-function";

describe('js-foundation/arrow-function', () => {
    test('getUserById should return user not found', (done) => {
        const id: number = 10;

        getUserById(id, (error, user) => {
            expect(error).toBe(`User not found with id ${id}`)
            expect(user).toBeUndefined()

            done()
        })
    })

    test('getUserById should return user found', (done) => {
        const id: number = 2;

        getUserById(id, (error, user) => {
            expect(error).toBeUndefined()
            expect(user).toEqual({
                id: 2,
                name: 'Jane Doe'
            })

            done()
        })
    })
})