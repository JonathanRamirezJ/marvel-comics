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

    &:hover {
      scale: 1;
      animation: hithere 1s;
    }

    @keyframes hithere {
      30% { transform: scale(1.2); }
      40%, 60% { transform: rotate(-20deg) scale(1.2); }
      50% { transform: rotate(20deg) scale(1.2); }
      70% { transform: rotate(0deg) scale(1.2); }
      100% { transform: scale(1); }
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
