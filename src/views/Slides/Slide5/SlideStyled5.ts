import styled from "styled-components";
import { Tokens } from "../../../static/Tokens";

// * Styled landing title
export const SlideStyled5 = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${Tokens.Colors.Backgrounds.Secondary};
  display: flex;
  position: relative;
  flex-direction: column;
`;

export const DivStyled5 = styled.div`
  top: 16em;
  left: 1em;
  right: 0.5em;
  position: absolute;
  text-transform: uppercase;
  font-weight: ${Tokens.Typography.Weights.Bolder};

  @media (min-width: 500px) {
    top: 18em;
  }
  @media (min-width: 700px) {
    top: 30em;
    left: 3em;
    max-width: 600px;
  }
  @media (min-width: 900px) {
    top: 30em;
    left: 4em;
    text-transform: none;
    max-width: 700px;
  }
  @media (min-width: 1200px) {
    top: 20em;
    left: 8em;
    right: 20em;
    max-width: 700px;
  }
  @media (min-width: 1200px) {
    top: 20em;
    right: 20em;
  }

  @media (min-width: 1400px) {
    top: 20em;
    max-width: 700px;
  }
`;
