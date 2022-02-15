import styled from "styled-components";

// * Interface definition for props configuration
interface ProgressStatusProps {
  progress: number;
  bgColor: string;
}

// * Create styled div
export const ProgressBarContainer = styled.div`
  width: 100%;
  height: 4pt;
`;

// * Created sub progress div
export const ProgressStatus = styled.div<ProgressStatusProps>`
  background-color: ${(props) => props.bgColor};
  height: 4pt;
  width: ${(props) => props.progress}%;
`;
