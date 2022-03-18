import styled from "styled-components";
import { Tokens } from "../../../static/Tokens";

// * Styled landing title
export const SlideStyled5 = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${Tokens.Colors.Backgrounds.Secondary};
  display: flex;
  justify-content: left;
  align-items: center;
  font-family: ${Tokens.Typography.FontFamily.Primary};
`;

export const DivStyled5 = styled.div`
  text-transform: uppercase;
  max-width: 80vw;
  margin-left: 10vw;
  font-weight: ${Tokens.Typography.Weights.SemiBold};
  @media (min-width: 500px) {
    margin-left: 14vw;
  }
  @media (min-width: 1000px) {
    max-width: 50vw;
    margin-left: 8vw;
    font-weight: ${Tokens.Typography.Weights.Bold};
  }
  @media (min-width: 1700px) {
    max-width: 40vw;
  }
  @media (min-width: 2000px) {
    max-width: 35vw;
  }
  @media (min-width: 2500px) {
    max-width: 30vw;
  }
`;
