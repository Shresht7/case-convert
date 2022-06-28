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
 * Convert a string to a different case
 * @param str String to convert the case of
 * @param strCase Case to convert to
 * @returns Converted string
 */
export function convert(str: string, strCase: Case): string {
    return str
}
