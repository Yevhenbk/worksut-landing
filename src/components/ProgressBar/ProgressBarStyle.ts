import styled, { keyframes } from "styled-components";

// * Interface definition for props configuration
interface ProgressStatusProps {
  progress: number;
  bgColor: string;
  dur: string;
  direction: string;
  timing: string;
  delay: string;
  fill: string;
  height: number;
}

// * Create styled div
export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 4pt;
`;

// * Define keyframes
//const upStatus = keyframes`
  /* from{
  width: 0%;
  }
  to{ 
    width: 100%;
  } */
//`;
const upStatusRight = keyframes`
  from{
    transform: scaleX(0);
    transform-origin: 100% 100%;
    opacity: 1;
  }
  to{
    transform: scaleX(1);
    transform-origin: 100% 100%;
    opacity: 1;
  }
`;

// * Created sub progress div
export const ProgressStatus = styled.div<ProgressStatusProps>`
  background-color: ${(props) => props.bgColor};
  height: ${(props) => props.height}pt;
  width: ${(props) => props.progress}%;
  animation: ${upStatusRight} ${(props) => props.dur}s
    ${(props) => props.timing} ${(props) => props.direction}
    ${(props) => props.delay}s ${(props) => props.fill};
`;
