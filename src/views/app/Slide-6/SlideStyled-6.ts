import { Tokens } from "./../../../static/Tokens";
import styled from "styled-components";
// * Interface definition for props configuration
interface SlideStyle6Props {
  bgColor: string;
  width: number;
  height: number;
}
// .TextIcon {
//   display: flex-inline;

// }

// * Styled landing title
export const SlideStyled6 = styled.div<SlideStyle6Props>`
  width: ${(props) => props.width}%;
  height: ${(props) => props.height}vh;
  display: flex;
  position: relative;

  flex-direction: column;
  background-color: ${(props) => props.bgColor};
`;
export const DivStyle6 = styled.div`
  position: absolute;
  top: 16em;
  left: 1.5em;
  text-transform: uppercase;
  font-weight: ${Tokens.Typography.Weights.Black};

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
export const Icon = styled.img`
  width: 20px;
  height: 20px;
  left: 5px;
  margin-right: 1em;
`;
export const TextIcon = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  margin-top: 1em;
  text-transform: none;
`;
