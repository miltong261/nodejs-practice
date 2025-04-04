// const { getUUID, getAge } = require('../plugins')

// const buildPerson = ({name, birthdate}) => {
//     return {
//         id: getUUID(),
//         name: name,
//         birthdate: birthdate,
//         age: getAge(birthdate)
//     }
// }

// const data = {
//     name: 'John Doe',
//     birthdate: '1990-01-01'
// }

// const person = buildPerson(data)

// console.log(person)

const buildMakePerson = ({ getUUID, getAge }) => {
    return ({name, birthdate}) => {
        return {
            id: getUUID(),
            name: name,
            birthdate: birthdate,
            age: getAge(birthdate)
        }
    }
}

module.exports = {
    buildMakePerson
}