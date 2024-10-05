import styled from "styled-components";
import { theme } from "styled-tools";

export const JumbotronContainer = styled.div`
  display: flex;
  height: 700px;
  position: relative;

  .carousel {
    &.carousel-slider {
      height: 700px;
    }

    .slider-wrapper {
      height: 700px;
    }

    .slide img {
      height: 700px;
      object-fit: cover;
    }
  }
`;

export const JumbotronOverlay = styled.div`
  background-color: ${theme("Primary_02")};
  height: 700px;
  position: absolute;
  top: 0;
  opacity: 0.7;
  width: 100%;
  z-index: 8;
`;

export const LogoContent = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  top: 0;
  height: 50px;
  width: 100%;
  z-index: 9;
  background-color: ${theme("Primary_01")};

  img {
    height: 50px;
    width: auto;
  }
`;

export const TextContent = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 9;

  p {
    font-size: 56px;
    font-weight: 700;
    font-family: "Maven Pro";
    text-transform: uppercase;
  }
`;

export const Button = styled.button`
  background-color: ${theme("Primary_01")};
  border-radius: 3px;
  font-family: "Maven Pro";
  font-size: 16px;
  margin: 16px;
  height: 50px;
  width: 200px;
  font-weight: 500;

  &:hover {
    background-color: ${theme("Primary_03")};
    opacity: 0.8;
  }
`;
