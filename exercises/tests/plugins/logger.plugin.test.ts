import { buildLogger } from '../../src/plugins/logger.plugin';

describe('plugins/logger.plugin', () => {
    test('buildLogger should be return a function logger', () => {
        const logger = buildLogger('test-service')
        
        expect(typeof logger.log).toBe('function')
        expect(typeof logger.error).toBe('function')
    })
})