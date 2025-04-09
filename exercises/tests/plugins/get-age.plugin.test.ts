import { getAge } from "../../src/plugins/get-age.plugin";

describe('plugins/get-age.plugin', () => {
    test('getAge should be return the age of a person', () => {
        const birthdate: string = '1997-01-26'

        const age = getAge(birthdate)
        expect(typeof age).toBe('number')
    })

    test('getAge should be return current age', () => {
        const birthdate: string = '1997-01-26'

        const age = getAge(birthdate)

        const currentAge = new Date().getFullYear() - new Date(birthdate).getFullYear()

        expect(age).toBe(currentAge)
    })

    test('getAge should be return 0 years', () => {
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1997)

        const birthdate: string = '1997-01-26'

        const age = getAge(birthdate)
        expect(age).toBe(0)
    })
})