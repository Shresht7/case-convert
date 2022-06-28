import { describe, expect, test } from 'vitest'
import {
    check,
    Case,
    determineCase,
    splitIntoWords,
    convert,
} from './main'

interface TestCase<T> {
    desc: string
    actual: T
    expected: T
}

function RunTestCases<T>(testCases: TestCase<T>[]) {
    for (const testCase of testCases as TestCase<T>[]) {
        test(testCase.desc, () => {
            expect(testCase.actual).toStrictEqual(testCase.expected)
        })
    }
}

function RunCheckTest(str: string, strCase: Case) {
    const testCases: TestCase<boolean>[] = []

    for (const c of Object.values(Case)) {
        const correct = c === strCase
        testCases.push({
            desc: `${str} should ${!correct ? 'not' : ''} match ${c} case`,
            actual: check(str, c),
            expected: correct
        })
    }

    RunTestCases(testCases)
}

describe('check', () => {

    describe('camelCase', () => {
        RunCheckTest('camelCase', Case.Camel)
    })

    describe('TitleCase', () => {
        RunCheckTest('TitleCase', Case.Title)
    })

    describe('snake_case', () => {
        RunCheckTest('snake_case', Case.Snake)
    })

    describe('kebab-case', () => {
        RunCheckTest('kebab-case', Case.Kebab)
    })

})

describe('determineCase', () => {

    const testCases: TestCase<Case | undefined>[] = [
        {
            desc: 'should determine "testString" to be camelCase',
            actual: determineCase('camelCase'),
            expected: Case.Camel
        },
        {
            desc: 'should determine "TestString" to be TitleCase',
            actual: determineCase('TitleCase'),
            expected: Case.Title
        },
        {
            desc: 'should determine "test_string" to be snake_case',
            actual: determineCase('snake_case'),
            expected: Case.Snake
        },
        {
            desc: 'should determine "test-string" to be kebab-case',
            actual: determineCase('kebab-case'),
            expected: Case.Kebab
        },
        {
            desc: 'should return undefined if case cannot be determined',
            actual: determineCase('0123Abc'),
            expected: undefined
        },
    ]

    RunTestCases(testCases)

})


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
