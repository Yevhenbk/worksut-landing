import styled  from "styled-components";
import { Tokens } from "../../static/Tokens";

// * Interface definition for props configuration
interface ProgressStatusProps {
  progress: number;
}

// * Create styled div
export const ProgressBarContainer = styled.div`
  background-color: ${Tokens.Colors.Backgrounds.Secondary};
  width: 100%;
  height: 5px;
`;

// * Created sub progress div
export const ProgressStatus = styled.div<ProgressStatusProps>`
  background-color: ${Tokens.Colors.Button.Default};
  height: 5px;
  width: ${(props) => props.progress}%;
`;
