import { compile } from '../src/compiler'
import { readFileSync } from 'fs'

describe('Compiler', () => {
    it('should successfully compile the dux files', async () => {
        [
            './samples/hello'
        ].map(filePath => {
            const src = readFileSync(`${filePath}.dux`)
            const target = readFileSync(`${filePath}.js`)

            assert(compile(src) === target, 'Should produce same output')
        })
    })
})
