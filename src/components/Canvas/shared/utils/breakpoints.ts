const MediaQuery = (maxWidth: number) =>
  `@media (max-width: ${maxWidth}px)`;
/**
 * Default Breakpoints
 */
export const breakpoints = {
  mobile: 575,
  tablet: 768,
  tabletLand: 992,
  desktop: 1200,
  desktopLarge: 1440
};

/**
 * Example with `styled-components`
 * @example
 * ```typescript
 * ${media.mobile} {
 *  padding: 1.5rem;
 *  margin: 1rem
 * }
 * ``` 
 */
export const media = {
  custom: MediaQuery,
  mobile: MediaQuery(breakpoints.mobile),
  tablet: MediaQuery(breakpoints.tablet),
  tabletLand: MediaQuery(breakpoints.tabletLand),
  desktop: MediaQuery(breakpoints.desktop),
  desktopLarge: MediaQuery(breakpoints.desktopLarge),
};