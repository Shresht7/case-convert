// ----------------
// HELPER FUNCTIONS
// ----------------

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
