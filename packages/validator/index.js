/**
 * Checks if given value is null or undefined or whitespace string
 * @param {*} value 
 * @returns 
 */
exports.isNullOrWhitespace = (value) => value === undefined || value === null || !value.trim();
