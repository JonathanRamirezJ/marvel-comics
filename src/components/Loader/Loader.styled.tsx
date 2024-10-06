import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0% { 
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const LoaderStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  animation: ${fadeIn} 8s;
  width: 100%;

  @keyframes fadeIn {
    0% { 
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
