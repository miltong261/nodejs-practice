import { soccerTeams } from '../../src/js-foundation/desestructuring'

describe('js-foundation/desesctucturing', () => {
    test('soccerTeams should contain Brasil and Argentina', () => {
        expect(soccerTeams).toContain('Brasil')
        expect(soccerTeams).toContain('Argentina')
    })

    test('First soccer team should be Brasil and last should be Argentina', () => {
        const [alemania, , , brasil] = soccerTeams
        
        expect(alemania).toBe('Alemania')
        expect(brasil).toBe('Brasil')
    })
})