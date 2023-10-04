/**
 * Get Random Number In Range
 * @param min 
 * @param max 
 */

export const getRandomNumberInRange = (min: number, max: number) => Math.random() * (max - min + 1) + min;