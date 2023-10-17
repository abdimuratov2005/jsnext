import { clamp01 } from "./clamp01";

/**
 * Normalize
 * @param value 
 * @param min 
 * @param max 
 * @returns 
 */

export const normalize = (value: number, min: number, max: number) => clamp01((value - min) / (max - min));