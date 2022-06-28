//  Library
import { test, expect } from 'vitest'

export interface TestCase<T> {
    desc: string
    actual: T
    expected: T
}

export function RunTestCases<T>(testCases: TestCase<T>[]) {
    for (const testCase of testCases as TestCase<T>[]) {
        test(testCase.desc, () => {
            expect(testCase.actual).toStrictEqual(testCase.expected)
        })
    }
}
