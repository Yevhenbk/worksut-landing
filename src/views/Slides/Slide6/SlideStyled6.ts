import { Tokens } from "../../../static/Tokens";
import styled from "styled-components";

// * Styled landing title
export const SlideStyled6 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: ${Tokens.Colors.Backgrounds.Secondary};
  font-family: ${Tokens.Typography.FontFamily.Primary};
`;
export const DivStyle6 = styled.div`
  text-transform: uppercase;
  max-width: 80vw;
  margin-left: 10vw;
  text-transform: uppercase;

  @media (min-width: 500px) {
    margin-left: 14vw;
  }
  @media (min-width: 1000px) {
    max-width: 50vw;
    margin-left: 8vw;
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
export const Icon = styled.img`
  width: 8vw;
  height: 5vh;
  left: 1em;
  right: 1em;
  margin-right: 1em;

  @media (min-width: 500px) {
    width: 2.5em;
    height: 2.5em;
  }
`;
export const TextIcon = styled.div`
  display: inline-flex;
  width: 80vw;
  flex-wrap: nowrap;
  margin-top: 1em;
  text-transform: none;
  font-size: ${Tokens.Typography.Sizes.Mobile.xSmall};

  @media (min-width: 500px) {
    font-size: ${Tokens.Typography.Sizes.Mobile.Medium};
  }
  @media (min-width: 700px) {
    font-size: ${Tokens.Typography.Sizes.Website.xSmall};
    width: 70vw;
  }
  @media (min-width: 1000px) {
    width: 50vw;
  }
  @media (min-width: 1400px) {
    width: 40vw;
  }
  @media (min-width: 1800px) {
    width: 30vw;
  }
  @media (min-width: 2300px) {
    width: 20vw;
  }
`;
