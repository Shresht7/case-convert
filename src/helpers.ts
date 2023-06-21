// ----------------
// HELPER FUNCTIONS
// ----------------

/**
 * Split a string into an array of words. Removes special characters like _ and -
 * @param str String to split into words
 * @returns an array of words
 */
export const splitIntoWords = (str: string): string[] => str
    .replace(/([A-Z])[^A-Z]*?/g, "_$1") // Insert underscore before uppercase letters
    .split(/[_\-]/g) // Split the string at underscores
    .filter(x => x !== '') // Remove empty elements

/**
 * Capitalize the first character of the string
 * @param str String to capitalize
 * @param all If true, capitalize all characters; if false (default), only capitalize the first character
 * @returns Capitalized string
 */
export const capitalize = (str: string, all: boolean = false): string =>
    all ? str.toUpperCase() : str[0].toUpperCase() + str.substring(1);

/**
 * Uncapitalize the first character of the string
 * @param str String to uncapitalize
 * @param all If true, uncapitalize all characters; if false (default), only uncapitalize the first character
 * @returns Uncapitalized string
 */
export const uncapitalize = (str: string, all: boolean = false): string =>
    all ? str.toLowerCase() : str[0].toLowerCase() + str.substring(1);
