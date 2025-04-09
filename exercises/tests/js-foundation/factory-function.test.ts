import { buildMakePerson } from '../../src/js-foundation/factory-function'

describe('js-foundation/factory-function', () => {
    const getUUID = () => '1234-5678-9101-1121'
    const getAge = () => 35

    test('buildMakePerson should be return a function', () => {
        const makePerson = buildMakePerson({ getUUID, getAge })
        expect(makePerson).toBeInstanceOf(Function)
    })

    test('buildMakePerson should return a person object', () => {
        const makePerson = buildMakePerson({ getUUID, getAge })
        
        const data = {
            name: 'John Doe',
            birthdate: '1980-01-01'
        }
        const person = makePerson(data)
        
        expect(person).toEqual({
            id: '1234-5678-9101-1121',
            name: 'John Doe',
            birthdate: '1980-01-01',
            age: 35
        })
    })
})