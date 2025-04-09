import { getPokemonNameById } from "../../src/js-foundation/promise"

describe('js-foundation/promise', () => {
    test('getPokemonNameById should return a pokemon', async () => {
        const pokemonId: number = 1

        const pokemonName = await getPokemonNameById(pokemonId)

        expect(pokemonName).toBe('bulbasaur')
    })

    test('getPokemonNameById should return if pokemon not found', async () => {
        const pokemonId: number = 9999999999

        try {
            await getPokemonNameById(pokemonId)
            expect(true).toBe(false)      
        } catch (error) {
            expect(error).toBe(`Pokemon with id ${pokemonId} not found`)
        }

    })
})