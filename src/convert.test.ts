//  Library
import { Case } from './case'
import { describe } from 'vitest'
import { convert } from './convert'
import { TestCase, RunTestCases } from './test'

type convertCaseTest = [string, Case, string]

function RunConversionTests(tests: convertCaseTest[]) {
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

    RunConversionTests([
        ['camelCase', Case.Title, 'CamelCase'],
        ['camelCase', Case.Snake, 'camel_case'],
        ['camelCase', Case.Kebab, 'camel-case'],
        ['anotherCamelCase', Case.Title, 'AnotherCamelCase'],
        ['anotherCamelCase', Case.Snake, 'another_camel_case'],
        ['anotherCamelCase', Case.Kebab, 'another-camel-case'],

        ['TitleCase', Case.Camel, 'titleCase'],
        ['TitleCase', Case.Snake, 'title_case'],
        ['TitleCase', Case.Kebab, 'title-case'],
        ['AnotherTitleCase', Case.Camel, 'anotherTitleCase'],
        ['AnotherTitleCase', Case.Snake, 'another_title_case'],
        ['AnotherTitleCase', Case.Kebab, 'another-title-case'],


        ['snake_case', Case.Camel, 'snakeCase'],
        ['snake_case', Case.Title, 'SnakeCase'],
        ['snake_case', Case.Kebab, 'snake-case'],
        ['another_snake_case', Case.Camel, 'anotherSnakeCase'],
        ['another_snake_case', Case.Title, 'AnotherSnakeCase'],
        ['another_snake_case', Case.Kebab, 'another-snake-case'],

        ['kebab-case', Case.Camel, 'kebabCase'],
        ['kebab-case', Case.Title, 'KebabCase'],
        ['kebab-case', Case.Snake, 'kebab_case'],
        ['another-kebab-case', Case.Camel, 'anotherKebabCase'],
        ['another-kebab-case', Case.Title, 'AnotherKebabCase'],
        ['another-kebab-case', Case.Snake, 'another_kebab_case'],
    ])

})
