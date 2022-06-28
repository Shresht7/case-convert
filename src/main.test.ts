import { describe, expect, test } from 'vitest'
import { check, Case, determineCase } from './main'

interface TestCase<T> {
    desc: string
    actual: T
    expected: T
}

function RunTestCases<T>(testCases: TestCase<T>[]) {
    for (const testCase of testCases as TestCase<T>[]) {
        test(testCase.desc, () => {
            expect(testCase.actual).toBe(testCase.expected)
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
