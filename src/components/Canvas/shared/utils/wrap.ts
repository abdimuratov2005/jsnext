/**
 * 
 * @param min MINIMAL VALUE
 * @param max MAXIMAL VALUE
 * @param v
 * @returns 
 */

export const wrap = function (min: number, max: number, v: number) {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};