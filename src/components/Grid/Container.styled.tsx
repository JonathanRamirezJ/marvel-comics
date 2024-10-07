import styled from "styled-components";
import mediaQuery, { Screen } from "../../utils/MediaQuery";
import { prop } from "styled-tools";

export const Container = styled.section`
  box-sizing: border-box;
  display: grid;
  grid-template-rows: auto;
  padding: 0 24px;
  margin: 0 auto;
  width: 100%;
  max-width: 1500px;

  ${mediaQuery[Screen.mobile]} {
    max-width: 428px;
    min-width: 100%;
  }
`;

export const FillerContainer = styled(Container)`
  position: relative;
  min-height: calc(100vh - 65px);
  padding-bottom: 120px;
  align-items: start;
  width: 100%;
`;

export const BottomFixedContainer = styled.div<{
  bottom?: number;
}>`
  display: flex;
  position: absolute;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
  bottom: ${prop("bottom", 20)}px;
  padding: 0 10px;
  gap: 5px;
  left: 0;
`;
