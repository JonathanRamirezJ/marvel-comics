import { css } from "styled-components";
import { tColumn } from "../../../models/Column";
import { Screen } from "../../../utils/MediaQuery";

export const setColumnSize = (screen?: Screen) => (props: tColumn) => {
  function getResponsiveSize() {
    switch (screen) {
      case Screen.xs:
        return props.xs;
      case Screen.sm:
        return props.sm;
      case Screen.md:
        return props.md;
      case Screen.lg:
        return props.lg;
      case Screen.xl:
        return props.xl;
      case Screen.xxl:
        return props.xxl;
      case Screen.mobile:
        return props.mobile;
      case Screen.desktop:
        return props.desktop;
    }
  }

  function getColumnSize() {
    const columnSize = getResponsiveSize();
    let defaultCase = props.span ? `span ${props.span}` : "";

    if (!columnSize && !props.span) {
      defaultCase = "auto";
    }

    return columnSize ? `span ${columnSize}` : defaultCase;
  }

  return css`
    grid-column: ${getColumnSize()};
  `;
};
