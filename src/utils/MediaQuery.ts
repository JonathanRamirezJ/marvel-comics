export enum Screen {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  xxl = "xxl",
  mobile = "mobile",
  tablet = "tablet",
  desktop = "desktop",
  xlDesktop = "xlDesktop",
}

const screenMin = {
  [Screen.xs]: 0,
  [Screen.sm]: 576,
  [Screen.md]: 768,
  [Screen.lg]: 992,
  [Screen.xl]: 1200,
  [Screen.xxl]: 1400,
};

const screenMax = {
  [Screen.xs]: screenMin.sm - 1,
  [Screen.sm]: screenMin.md - 1,
  [Screen.md]: screenMin.lg - 1,
  [Screen.lg]: screenMin.xl - 1,
  [Screen.xl]: screenMin.xxl - 1,
};

export const mediaQueryMin = {
  [Screen.xs]: `(min-width: ${screenMin.xs}px)`,
  [Screen.sm]: `(min-width: ${screenMin.sm}px)`,
  [Screen.md]: `(min-width: ${screenMin.md}px)`,
  [Screen.lg]: `(min-width: ${screenMin.lg}px)`,
  [Screen.xl]: `(min-width: ${screenMin.xl}px)`,
  [Screen.xxl]: `(min-width: ${screenMin.xxl}px)`,
};

export const mediaQueryMax = {
  [Screen.xs]: `(max-width: ${screenMax.xs}px)`,
  [Screen.sm]: `(max-width: ${screenMax.sm}px)`,
  [Screen.md]: `(max-width: ${screenMax.md}px)`,
  [Screen.lg]: `(max-width: ${screenMax.lg}px)`,
  [Screen.xl]: `(max-width: ${screenMax.xl}px)`,
};

const mediaQuery = {
  [Screen.xs]: `@media screen and ${mediaQueryMin.xs} and ${mediaQueryMax.xs}`,
  [Screen.sm]: `@media screen and ${mediaQueryMin.sm} and ${mediaQueryMax.sm}`,
  [Screen.md]: `@media screen and ${mediaQueryMin.md} and ${mediaQueryMax.md}`,
  [Screen.lg]: `@media screen and ${mediaQueryMin.lg} and ${mediaQueryMax.lg}`,
  [Screen.xl]: `@media screen and ${mediaQueryMin.xl} and ${mediaQueryMax.xl}`,
  [Screen.xxl]: `@media screen and ${mediaQueryMin.xxl}`,
  [Screen.mobile]: `@media screen and ${mediaQueryMin.xs} and ${mediaQueryMax.md}`,
  [Screen.tablet]: `@media screen and ${mediaQueryMin.md} and ${mediaQueryMax.lg}`,
  [Screen.desktop]: `@media screen and ${mediaQueryMin.lg}`,
  [Screen.xlDesktop]: `@media screen and ${mediaQueryMin.xl}`,
};
export default mediaQuery;
