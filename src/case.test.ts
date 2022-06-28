//  Library
import { describe } from 'vitest'
import { check, determineCase, Case } from './case'
import { TestCase, RunTestCases } from './test'

/** Run multiple tests that check if the given string (only) matches the given strCase */
function RunChecks(str: string, strCase: Case) {
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
        RunChecks('camelCase', Case.Camel)
    })

    describe('TitleCase', () => {
        RunChecks('TitleCase', Case.Title)
    })

    describe('snake_case', () => {
        RunChecks('snake_case', Case.Snake)
    })

    describe('kebab-case', () => {
        RunChecks('kebab-case', Case.Kebab)
    })

})

describe('determineCase', () => {

    RunTestCases([
        {
            desc: 'should determine "testString" to be camelCase',
            actual: determineCase('testString'),
            expected: Case.Camel
        },
        {
            desc: 'should determine "secondTestString" to be camelCase',
            actual: determineCase('secondTestString'),
            expected: Case.Camel
        },
        {
            desc: 'should determine "TestString" to be TitleCase',
            actual: determineCase('TestString'),
            expected: Case.Title
        },
        {
            desc: 'should determine "SecondTestString" to be TitleCase',
            actual: determineCase('SecondTestString'),
            expected: Case.Title
        },
        {
            desc: 'should determine "test_string" to be snake_case',
            actual: determineCase('test_string'),
            expected: Case.Snake
        },
        {
            desc: 'should determine "second_test_string" to be snake_case',
            actual: determineCase('second_test_string'),
            expected: Case.Snake
        },
        {
            desc: 'should determine "test-string" to be kebab-case',
            actual: determineCase('test-string'),
            expected: Case.Kebab
        },
        {
            desc: 'should determine "second-test-string" to be kebab-case',
            actual: determineCase('second-test-string'),
            expected: Case.Kebab
        },
        {
            desc: 'should return undefined if case cannot be determined',
            actual: determineCase('0123Abc'),
            expected: undefined
        },
        {
            desc: 'should return undefined for mixed cases',
            actual: determineCase('test-String'),
            expected: undefined
        },
        {
            desc: 'should return undefined for mixed cases',
            actual: determineCase('Second_test_String'),
            expected: undefined
        },
    ])

})
