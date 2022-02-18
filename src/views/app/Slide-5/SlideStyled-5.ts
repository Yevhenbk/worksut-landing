import styled from "styled-components";
import { Tokens } from "../../../static/Tokens";

// * Interface definition for props configuration
interface SlideStyled5Props {
  bgColor: string;
  width: number;
  height: number;
}

// * Styled landing title
export const SlideStyled5 = styled.div<SlideStyled5Props>`
  width: ${(props) => props.width}%;
  height: ${(props) => props.height}vh;
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const DivStyled5 = styled.div`
  margin: 1em;
  top: 16em;
  left: 1.5em;
  position: absolute;
  text-transform: uppercase;
  font-weight: ${Tokens.Typography.Weights.Bolder};

  @media (min-width: 500px) {
    top: 18em;
    left: 3em;
  }
  @media (min-width: 700px) {
    top: 30em;
    left: 6em;
  }
  @media (min-width: 900px) {
    top: 20em;
    left: 8em;
    text-transform: none;
  }

  @media (min-width: 1200px) {
    top: 30em;
  }
`;
