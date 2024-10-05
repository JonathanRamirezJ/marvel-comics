import styled from "styled-components";
import { theme } from "styled-tools";
import mediaQuery, { Screen } from "../utils/MediaQuery";

export const ContentPreview = styled.div`
  margin: 12px;

  img {
    margin: 0 auto;

    ${mediaQuery[Screen.mobile]} {
      margin: 0;
    }
  }
`;

export const Footer = styled.div`
  background-color: ${theme("Primary_07")};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  width: 100%;

  p {
    color: ${theme("White")};
    font-size: 12px;
  }
`;