import { margin, padding } from "polished";
import { css } from "styled-components";
import { SpacingType, tColumn } from "../../../models/Column";

export function getSpacingSize(size?: number) {
  switch (size) {
    case 1:
      return "0.5rem";
    case 2:
      return "1rem";
    case 3:
      return "1.5rem";
    case 4:
      return "2rem";
    case 5:
      return "2.5rem";
    case 6:
      return "3rem";
  }
}

function getSpacingSquare(
  all?: number,
  y?: number,
  x?: number,
  top?: number,
  right?: number,
  bottom?: number,
  left?: number
) {
  const $all = getSpacingSize(all);

  const $x = getSpacingSize(x);
  const $y = getSpacingSize(y);

  const $top = getSpacingSize(top);
  const $bottom = getSpacingSize(bottom);

  const $left = getSpacingSize(left);
  const $right = getSpacingSize(right);

  const paddingValues = new Array(4).fill($all || "0rem");

  if ($y) {
    paddingValues[0] = $y;
    paddingValues[2] = $y;
  }

  if ($x) {
    paddingValues[3] = $x;
    paddingValues[1] = $x;
  }

  if ($top) {
    paddingValues[0] = $top;
  }

  if ($right) {
    paddingValues[1] = $right;
  }

  if ($bottom) {
    paddingValues[2] = $bottom;
  }

  if ($left) {
    paddingValues[3] = $left;
  }

  return paddingValues;
}

export const setSpacing = (type: SpacingType) => (props: tColumn) => {
  if (type === SpacingType.margin) {
    const spacingSquare = getSpacingSquare(
      props.m,
      props.my,
      props.mx,
      props.mt,
      props.mr,
      props.mb,
      props.ml
    );

    return css`
      ${margin(...spacingSquare)};
    `;
  }

  if (type === SpacingType.padding) {
    const spacingSquare = getSpacingSquare(
      props.p,
      props.py,
      props.px,
      props.pt,
      props.pr,
      props.pb,
      props.pl
    );

    return css`
      ${padding(...spacingSquare)};
    `;
  }
};
