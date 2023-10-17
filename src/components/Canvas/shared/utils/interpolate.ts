import { clamp01 } from "./clamp01";
import { normalize } from "./normalize";

/**
 * Interpolate
 * @param value 
 * @param min 
 * @param max 
 * @param newMin 
 * @param newMax 
 */

export const interpolate = (value: number, min: number, max: number, newMin: number, newMax: number) => clamp01(normalize(value, min, max) * (newMax - newMin) + newMin);