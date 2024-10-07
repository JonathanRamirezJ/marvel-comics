export enum SpacingType {
  padding = "padding",
  margin = "margin",
}

export enum AlignItems {
  flexStart = "flex-start",
  flexEnd = "flex-end",
  stretch = "stretch",
  baseline = "baseline",
  center = "center",
}

export enum JustifyContent {
  flexStart = "flex-start",
  flexEnd = "flex-end",
  spaceBetween = "space-between",
  spaceAround = "space-around",
  spaceEvenly = "space-evenly",
  center = "center",
}

export type tColumn = {
  // Alignment
  alignItems?: AlignItems;
  justifyContent?: JustifyContent;

  // Sizing
  span?: number;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  xxl?: number;
  mobile?: number;
  desktop?: number;

  // Visibility
  hiddenXs?: boolean;
  hiddenSm?: boolean;
  hiddenMd?: boolean;
  hiddenLg?: boolean;
  hiddenXl?: boolean;
  hiddenXxl?: boolean;
  hiddenMobile?: boolean;
  hiddenDesktop?: boolean;

  // Padding
  p?: number;
  px?: number;
  py?: number;
  pl?: number;
  pr?: number;
  pt?: number;
  pb?: number;

  // Margin
  m?: number;
  mx?: number;
  my?: number;
  ml?: number;
  mr?: number;
  mt?: number;
  mb?: number;
};
