import styled, { keyframes } from 'styled-components'
import { Tokens } from '../../static/Tokens'

// * Style for container indicator
export const ScrollableContainer = styled.div`
  border: 2pt solid ${Tokens.Colors.Backgrounds.Primary};
  width: 25pt;
  height: 45pt;
  border-radius: 2em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: top;
  position: relative;
  margin: 0 auto 2em;
`;

// * Define keyframes
export const BubbleAnimation = keyframes`
    0% {margin-top: 50%;}
    50% {margin-top: 80%;}
    100% {margin-top: 50%;}
`;

// * Style for content of Scrollable
export const ScrollableBubble = styled.div`
  width: 1px;
  height: 1px;
  padding: 6%;
  margin: 40%;
  border-radius: 3em;
  background-color: ${Tokens.Colors.Backgrounds.Primary};
  animation: ${BubbleAnimation} 1.25s infinite;
`;
