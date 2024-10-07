import styled from "styled-components";
import { theme } from "styled-tools";

export const ModalContainer = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(${theme("RGA_Black")}, 0.5);
  backdrop-filter: blur(5px);
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled.div`
  box-sizing: border-box;
  background-color: ${theme("Primary_04")};
  border-radius: 8px;
  box-shadow: 0 0 20px 0 rgba(${theme("RGA_Black")}, 0.3);
  height: 85%;
  padding: 16px;
  position: relative;
  overflow-y: auto;
  display: flex;
  width: 95%;
`;

export const ModalCloseButon = styled.div`
  color: ${theme("white")};
  cursor: pointer;
  font-size: 20px;
  font-weight: 800;
  position: fixed;
  right: 5%;
`;

export const ModalImage = styled.div`
  box-sizing: border-box;
  display: flex;
  height: 100%;
  width: 100%;
  margin: 0 auto;

  img {
    height: 500px;
    margin: 12px auto;
  }
`;

export const ModalTitle = styled.div`
  color: ${theme("White")};
  font-size: 32px;
  font-weight: 700;
`;

export const ModalText = styled.div`
  color: ${theme("White")};
  font-size: 12px;
  font-weight: 400;
  font-family: Poppins;
  margin: 12px 0;
  text-align: justify;
`;