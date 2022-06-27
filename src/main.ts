/** Case of a string */
enum Case {
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

//  TODO: Add Regular Expressions for the various cases
const CaseRegexp: Record<Case, RegExp> = {
    CAMEL: /\w/,
    SNAKE: /\w/,
    KEBAB: /\w/,
    TITLE: /\w/,
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
