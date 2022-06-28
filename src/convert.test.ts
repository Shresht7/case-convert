//  Library
import { Case } from './case'
import { describe } from 'vitest'
import { convert } from './convert'
import { TestCase, RunTestCases } from './test'

type convertTestCase = [string, Case, string]

function RunConvertTest(tests: convertTestCase[]) {
    const testCases: TestCase<string>[] = []

    for (const [input, to, output] of tests) {
        testCases.push({
            desc: `should convert ${input} to ${output} when case is ${to}`,
            actual: convert(input, to),
            expected: output,
        })
    }

    RunTestCases(testCases)
}

describe('convert', () => {

    RunConvertTest([
        ['camelCase', Case.Title, 'CamelCase'],
        ['camelCase', Case.Snake, 'camel_case'],
        ['camelCase', Case.Kebab, 'camel-case'],

        ['TitleCase', Case.Camel, 'titleCase'],
        ['TitleCase', Case.Snake, 'title_case'],
        ['TitleCase', Case.Kebab, 'title-case'],

        ['snake_case', Case.Camel, 'snakeCase'],
        ['snake_case', Case.Title, 'SnakeCase'],
        ['snake_case', Case.Kebab, 'snake-case'],

        ['kebab-case', Case.Camel, 'kebabCase'],
        ['kebab-case', Case.Title, 'KebabCase'],
        ['kebab-case', Case.Snake, 'kebab_case'],
    ])

})
