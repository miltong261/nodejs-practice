/** --------------------------------------------------------------------------- */
/**                              Get email template                             */
/** --------------------------------------------------------------------------- */

console.log('---------------------------------------------------------------------------')
console.log('1. Get email template')

const { emailTemplate } = require('./js-foundation/template')
console.log(emailTemplate)

console.log('---------------------------------------------------------------------------')





/** --------------------------------------------------------------------------- */
/**                               Desestructuring                               */
/** --------------------------------------------------------------------------- */
console.log('2. Desestructuring')

require('./js-foundation/desestructuring')

console.log('---------------------------------------------------------------------------')





/** --------------------------------------------------------------------------- */
/**                                  Callback                                   */
/** --------------------------------------------------------------------------- */
console.log('3. Callback')

const { getUserById } = require('./js-foundation/callback')

const userId = 1

getUserById(userId, function (error, user) {
    if (error) {
        throw new Error(error)
    }

    console.log(user)
})

console.log('---------------------------------------------------------------------------')





/** --------------------------------------------------------------------------- */
/**                                Arrow function                               */
/** --------------------------------------------------------------------------- */
console.log('4. Arrow function')

const { getUserById: arrowGetUserById } = require('./js-foundation/arrow-function')

arrowGetUserById(userId, (error, user) => {
    if (error) {
        throw new Error(error)
    }

    console.log(user)
})

console.log('---------------------------------------------------------------------------')





/** --------------------------------------------------------------------------- */
/**                               Factory functions                             */
/** --------------------------------------------------------------------------- */
console.log('5. Factory functions')

const { getUUID, getAge, buildLogger } = require('./plugins')
const { buildMakePerson } = require('./js-foundation/factory-function')

const makePerson = buildMakePerson({ getUUID, getAge })

const data = {
    name: 'John Doe',
    birthdate: '1980-01-01'
}

const person = makePerson(data)

console.log({person})

console.log('---------------------------------------------------------------------------')





/** --------------------------------------------------------------------------- */
/**                                  Promises                                   */
/** --------------------------------------------------------------------------- */
console.log('6. Promises')

const { getPokemonById } = require('./js-foundation/promise')

getPokemonById(1)
    .then((pokemon) => console.log({pokemon: pokemon.name}))
    .catch((error) => console.log(error))
    .finally(() => console.log('Finished'))





/** --------------------------------------------------------------------------- */
/**                                  winston                                    */
/** --------------------------------------------------------------------------- */
const logger = buildLogger('app.js')

logger.log('Hello world')
logger.error('Error message')