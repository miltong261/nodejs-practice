/** --------------------------------------------------------------------------- */
/**                              Get email template                             */
/** --------------------------------------------------------------------------- */

console.log('---------------------------------------------------------------------------')
console.log('1. Get email template')

import { emailTemplate } from "./js-foundation/template";
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

import { getUserById } from "./js-foundation/callback";

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

import { getUserById as arrowGetUserById } from "./js-foundation/arrow-function";

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

import { getUUID, getAge, buildLogger } from "./plugins";
import { buildMakePerson } from "./js-foundation/factory-function";

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

import { getPokemonNameById } from "./js-foundation/promise";

getPokemonNameById(1)
    .then((pokemon) => console.log({pokemon: pokemon}))
    .catch((error) => console.log(error))
    .finally(() => console.log('Finished'))





/** --------------------------------------------------------------------------- */
/**                                  winston                                    */
/** --------------------------------------------------------------------------- */
const logger = buildLogger('app.js')

logger.log('Hello world')
logger.error('Error message')

