/**
 * Mix
 * @param start 
 * @param end 
 * @param t 
 * @returns 
 */

export const mix = (start: number, end: number, t: number) => start * (1 - t) + t * end; 