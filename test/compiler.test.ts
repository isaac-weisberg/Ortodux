import { compile } from '../src/compiler'
import { readFileSync } from 'fs'
import * as assert from 'assert'

describe('Compiler', () => {
    it('should successfully compile the dux files', async () => {
        for (const filepath of [
            './samples/hello'
        ]) {
            const src = readFileSync(`${filepath}.dux`).toString()
            const target = readFileSync(`${filepath}.js`).toString()

            assert(await compile(src) === target, 'Should produce same output')
        }
    })
})
