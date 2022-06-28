/** Case of a string */
export enum Case {
    //  camelCase
    Camel = 'CAMEL',
    //  snake_case
    Snake = 'SNAKE',
    //  kebab-case
    Kebab = 'KEBAB',
    //  TitleCase
    Title = 'TITLE',
    //  PascalCase
    Pascal = 'TITLE',
}

/**
 * Helper function to generate regular expressions for a given string case
 * @param first RegExp to match the first character of the string
 * @param subsequent RegExp to match the starting character of any subsequent words
 * @param separator RegExp to match the delimiter between words
 */
const createRegex = (first: string, subsequent: string, separator: string = ""): RegExp => new RegExp(`^${first}[a-z0-9]+(?:${separator}${subsequent}[a-z0-9]+)*$`)

/** Maps string cases to their corresponding regular expressions */
const CaseRegexp: Record<Case, RegExp> = {
    CAMEL: createRegex('[a-z]', '[A-Z]'),
    SNAKE: createRegex('[a-z]', '[a-z]', '[_]'),
    KEBAB: createRegex('[a-z]', '[a-z]', '[-]'),
    TITLE: createRegex('[A-Z]', '[A-Z]'),
}

/**
 * Checks if the given string is of the given case
 * @param str String to check
 * @param strCase Potential case of the string
 * @returns boolean to determine if the string is of this case
 */
export function check(str: string, strCase: Case): boolean {
    return CaseRegexp[strCase].test(str)
}

/**
 * Determine the string case of the given string
 * @param str String to check the case of
 * @returns Case of the string or undefined if no match was found
 */
export function determineCase(str: string): Case | undefined {
    for (const caseType of Object.keys(CaseRegexp) as Case[]) {
        if (check(str, caseType)) {
            return caseType
        }
    }
}

/**
 * Split a string into an array of words. Removes special characters like _ and -
 * @param str String to split into words
 * @returns an array of words
 */
export const splitIntoWords = (str: string): string[] => str
    .replace(/([A-Z])/g, "_$1")
    .split(/[_\-]/g)
    .filter(x => x !== '')

/** Capitalize the first character of the string */
export const capitalize = (str: string) => str[0].toUpperCase() + str.substring(1)
/** Uncapitalize the first character of the string */
export const uncapitalize = (str: string) => str[0].toLowerCase() + str.substring(1)

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
