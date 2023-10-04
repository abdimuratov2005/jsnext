/**
 * Util: Clamp01
 * @param {number} value
 */

export const clamp01 = (value: number) => Math.min(Math.max(value, 0), 1);