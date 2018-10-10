import parse from './parser/parse'

export async function compile(source: string): Promise<string> {
    const parsed = await parse(source)
    return await compile(parsed)
}