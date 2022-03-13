import { Tokens } from "../../../static/Tokens";
import styled from "styled-components";
interface Slide3AnimationsType {
  translateY: number;
  opacity: number;
  translateX: number;
}

// * Style for Slide3
export const Slide3Styled = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
  background-color: ${Tokens.Colors.Backgrounds.Secondary};
  color: ${Tokens.Colors.Text.Secondary};
  display: flex;
  flex-direction: column;

  .progress {
    @media (max-width: 1200px) {
      max-width: 50%;
    }
  }
  .progressRight {
    @media (max-width: 1200px) {
      width: 50%;
      position: relative;
      left: 50%;
    }
  }
  @media (min-width: 1200px) {
    flex-direction: row;
  }
`;

// * Style for the left container
export const Slide3ContentLeftStyled = styled.div`
  position: relative;
  top: 5em;
  @media (min-width: 500px) {
    top: 3em;
  }
  @media (min-width: 700px) {
    top: 7em;
  }
  @media (min-width: 900px) {
    top: 12em;
  }
  @media (min-width: 1200px) {
    top: 19em;
    left: -9em;
  }
  @media (min-width: 1500px) {
    top: 16em;
  }
  @media (min-width: 1800px) {
    top: 22em;
  }
`;

// * Style for the left text
export const Slide3TextLeftStyled = styled.div<Slide3AnimationsType>`
  margin: 0.5em 0 1em 1em;
  max-width: 300px;
  opacity: ${props => props.opacity};
  font-family: ${Tokens.Typography.FontFamily.Primary};
  font-weight: ${Tokens.Typography.Weights.Bold};
  font-size: ${Tokens.Typography.Sizes.Mobile.Medium};
  line-height: ${Tokens.Typography.LineHeight.xxSmall};
  transform: translateX(${props => props.translateX}vh);

  @media (min-width: 500px) {
    margin-left: 1.5em;
    max-width: 400px;
    font-size: ${Tokens.Typography.Sizes.Website.xSmall};
    line-height: ${Tokens.Typography.LineHeight.xSmall};
  }
  @media (min-width: 700px) {
    margin-left: 2em;
    max-width: 600px;
    font-size: ${Tokens.Typography.Sizes.Website.Small};
    line-height: ${Tokens.Typography.LineHeight.Regular};
  }
  @media (min-width: 900px) {
    max-width: 700px;
    line-height: ${Tokens.Typography.LineHeight.Large};
  }
  @media (min-width: 1200px) {
    max-width: 450px;
  }
  @media (min-width: 1500px) {
    max-width: 550px;
    margin-left: 5em;
    margin-right: -3em;
    transform: translateY(${props => props.translateY}vh);
  }
  @media (min-width: 1800px) {
    margin-left: 10em;
    font-size: ${Tokens.Typography.Sizes.Website.Small};
  }
`;

// * Style for the right container
export const Slide3ContentRightStyled = styled.div`
  position: relative;
  top: 7em;
  @media (min-width: 500px) {
    top: 4em;
  }
  @media (min-width: 700px) {
    top: 9em;
  }
  @media (min-width: 900px) {
    top: 15em;
  }
  @media (min-width: 1200px) {
    top: 17em;
  }
  @media (min-width: 1800px) {
    top: 24em;
  }
`;

// * Style for the right text
export const Slide3TextRightStyled = styled.div<Slide3AnimationsType>`
  margin-left: 1em;
  margin-bottom: 1em;
  max-width: 300px;
  opacity: ${props => props.opacity};
  font-family: ${Tokens.Typography.FontFamily.Primary};
  font-weight: ${Tokens.Typography.Weights.SemiBold};
  font-size: ${Tokens.Typography.Sizes.Mobile.Small};
  line-height: ${Tokens.Typography.LineHeight.xxxSmall};
  transform: translateX(${props => props.translateX}vh);

  @media (min-width: 500px) {
    margin-left: 2em;
    max-width: 400px;
    font-size: ${Tokens.Typography.Sizes.Mobile.Medium};
    line-height: ${Tokens.Typography.LineHeight.xxSmall};
  }
  @media (min-width: 700px) {
    margin-left: 3em;
    max-width: 600px;
    font-size: ${Tokens.Typography.Sizes.Website.xSmall};
    line-height: ${Tokens.Typography.LineHeight.xSmall};
  }
  @media (min-width: 900px) {
    max-width: 700px;
    line-height: ${Tokens.Typography.LineHeight.Small};
  }
  @media (min-width: 1200px) {
    margin-left: 0em;
    margin-right: 3em;
    max-width: 500px;
    line-height: ${Tokens.Typography.LineHeight.Regular};
  }
  @media (min-width: 1500px) {
    max-width: 600px;
    margin-right: 6em;
    transform: translateY(${props => props.translateY}vh);
  }
  @media (min-width: 1800px) {
    margin-right: 10em;
  }
`;
