//  Library
import { Case } from './case'
import { splitIntoWords, capitalize, uncapitalize } from './helpers'

/** Convert a string to camelCase */
export const toCamelCase = (str: string) => {
    const [firstWord, ...words] = splitIntoWords(str)
    return words.reduce((accumulator, current) => accumulator + capitalize(current), uncapitalize(firstWord))
}

/** Convert a string to snake-case */
const toSnakeCase = (str: string) => {
    const [firstWord, ...words] = splitIntoWords(str)
    return words.reduce((accumulator, current) => accumulator + '_' + uncapitalize(current), uncapitalize(firstWord))
}

/** Convert a string to kebab-case */
const toKebabCase = (str: string) => {
    const [firstWord, ...words] = splitIntoWords(str)
    return words.reduce((accumulator, current) => accumulator + '-' + uncapitalize(current), uncapitalize(firstWord))
}

/** Convert a string to TitleCase */
const toTitleCase = (str: string) => {
    const [firstWord, ...words] = splitIntoWords(str)
    return words.reduce((accumulator, current) => accumulator + capitalize(current), capitalize(firstWord))
}

const CaseConverts = {
    CAMEL: toCamelCase,
    SNAKE: toSnakeCase,
    KEBAB: toKebabCase,
    TITLE: toTitleCase,
}

/**
 * Convert a string to a different case
 * @param str String to convert the case of
 * @param strCase Case to convert to
 * @returns Converted string
 */
export const convert = (str: string, strCase: Case): string => CaseConverts[strCase](str)
