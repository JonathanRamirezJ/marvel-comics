import styled, { css } from "styled-components";
import { ifProp, prop } from "styled-tools";
import { SpacingType, tColumn } from "../../models/Column";
import mediaQuery, { Screen } from "../../utils/MediaQuery";
import { setColumnSize, setSpacing, setVisibility } from "./functions";

export const Column = styled.div<tColumn>`
  ${({ alignItems, justifyContent }) =>
    alignItems || justifyContent
      ? css`
          display: flex;
        `
      : null}
  align-items: ${ifProp("alignItems", prop("alignItems", ""))};
  justify-content: ${ifProp("justifyContent", prop("justifyContent", ""))};

  ${setColumnSize()}
  ${setSpacing(SpacingType.margin)}
  ${setSpacing(SpacingType.padding)}

  ${mediaQuery[Screen.mobile]} {
    ${setColumnSize(Screen.mobile)}
    ${setVisibility(Screen.mobile)}
  }

  ${mediaQuery[Screen.desktop]} {
    ${setColumnSize(Screen.desktop)}
    ${setVisibility(Screen.desktop)}
  }

  ${mediaQuery[Screen.mobile]} {
    ${setColumnSize(Screen.xs)}
    ${setVisibility(Screen.xs)}
  }

  ${mediaQuery[Screen.sm]} {
    ${setColumnSize(Screen.sm)}
    ${setVisibility(Screen.sm)}
  }

  ${mediaQuery[Screen.md]} {
    ${setColumnSize(Screen.md)}
    ${setVisibility(Screen.md)}
  }

  ${mediaQuery[Screen.lg]} {
    ${setColumnSize(Screen.lg)}
    ${setVisibility(Screen.lg)}
  }

  ${mediaQuery[Screen.xl]} {
    ${setColumnSize(Screen.xl)}
    ${setVisibility(Screen.xl)}
  }

  ${mediaQuery[Screen.xxl]} {
    ${setColumnSize(Screen.xxl)}
    ${setVisibility(Screen.xxl)}
  }
`;
