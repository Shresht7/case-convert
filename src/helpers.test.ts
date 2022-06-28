//  Library
import { describe } from 'vitest'
import { capitalize, splitIntoWords, uncapitalize } from './helpers'
import { RunTestCases } from './test'

describe('capitalize', () => {

    RunTestCases([
        {
            desc: 'should capitalize a word',
            actual: capitalize('word'),
            expected: 'Word'
        },
        {
            desc: 'should capitalize a sentence',
            actual: capitalize('a sentence'),
            expected: 'A sentence'
        },
        {
            desc: 'should not mess with an already capitalized string',
            actual: capitalize('Capital'),
            expected: 'Capital'
        },
        {
            desc: 'should capitalize everything if all is true',
            actual: capitalize('Capital', true),
            expected: 'CAPITAL'
        },
    ])

})

describe('uncapitalize', () => {

    RunTestCases([
        {
            desc: 'should uncapitalize a Word',
            actual: uncapitalize('Word'),
            expected: 'word'
        },
        {
            desc: 'should uncapitalize A sentence',
            actual: uncapitalize('A sentence'),
            expected: 'a sentence'
        },
        {
            desc: 'should not mess with a non-capitalized string',
            actual: uncapitalize('Capital'),
            expected: 'capital'
        },
        {
            desc: 'should uncapitalize everything if all is true',
            actual: uncapitalize('CAPITAL', true),
            expected: 'capital'
        },
    ])

})

describe('splitIntoWords', () => {

    RunTestCases([
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
        {
            desc: 'should not mess with abbreviations',
            actual: splitIntoWords('getHTTPMethod'),
            expected: ['get', 'H', 'T', 'T', 'P', 'Method']
        },
        {
            desc: 'should not mess with abbreviations',
            actual: splitIntoWords('QATest'),
            expected: ['Q', 'A', 'Test']
        },
    ])

})
