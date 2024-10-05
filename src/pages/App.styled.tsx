import styled from "styled-components";
import { theme } from "styled-tools";
import mediaQuery, { Screen } from "../utils/MediaQuery";

export const MainContent = styled.div`
  background: linear-gradient(0deg, rgba(0,0,0,1) 17%, rgba(226,54,54,1) 98%);

  .carousel .slide img {
    width: 50%;

    ${mediaQuery[Screen.mobile]} {
      width: 100%;
    }
  }
`;

export const ContentPreview = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 12px 0;

  img {
    margin: 0 auto;
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