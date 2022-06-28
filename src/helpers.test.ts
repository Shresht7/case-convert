//  Library
import { describe } from 'vitest'
import { splitIntoWords } from './helpers'
import { TestCase, RunTestCases } from './test'

describe('splitIntoWords', () => {

    const testCases: TestCase<string[]>[] = [
        {
            desc: 'should split camelCase',
            actual: splitIntoWords('camelCaseString'),
            expected: ['camel', 'Case', 'String']
        },
        {
            desc: 'should split TitleCase',
            actual: splitIntoWords('TitleCaseString'),
            expected: ['Title', 'Case', 'String']
        },
        {
            desc: 'should split snake_case',
            actual: splitIntoWords('snake_case_string'),
            expected: ['snake', 'case', 'string']
        },
        {
            desc: 'should split kebab-case',
            actual: splitIntoWords('kebab-case-string'),
            expected: ['kebab', 'case', 'string']
        },
    ]

    RunTestCases(testCases)

})
