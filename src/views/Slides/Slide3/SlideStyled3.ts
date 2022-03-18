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
  font-family: ${Tokens.Typography.FontFamily.Primary};
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  overflow: hidden;

  .progress {
    @media (max-width: 1200px) {
      max-width: 50%;
    }
  }

  .progressRight {
    @media (max-width: 1200px) {
      width: 50%;
      transform: translateX(100%);
    }
  }
`;

// * Style for the left container
export const Slide3ContentLeftStyled = styled.div`
  height: min-content;
  margin-bottom: 10vh;
`;

// * Style for the left text
export const Slide3TextLeftStyled = styled.div<Slide3AnimationsType>`
  margin: 2vh 0vw 0vh 7vw;
  max-width: 85vw;
  opacity: ${(props) => props.opacity};
  font-size: ${Tokens.Typography.Sizes.Mobile.Medium};
  font-weight: ${Tokens.Typography.Weights.SemiBold};
  line-height: ${Tokens.Typography.LineHeight.xxSmall};
  transform: translateX(${(props) => props.translateX}vh);

  @media (min-width: 500px) {
    font-size: ${Tokens.Typography.Sizes.Website.xSmall};
    line-height: ${Tokens.Typography.LineHeight.xSmall};
  }

  @media (min-width: 700px) {
    font-size: ${Tokens.Typography.Sizes.Website.Small};
    line-height: ${Tokens.Typography.LineHeight.Regular};
  }

  @media (min-width: 900px) {
    line-height: ${Tokens.Typography.LineHeight.Large};
  }

  @media (min-width: 1200px) {
    max-width: 35vw;
    transform: translateY(${(props) => props.translateY}vh);
  }

  @media (min-width: 1700px) {
    font-size: ${Tokens.Typography.Sizes.Website.Small};
  }

`;

// * Style for the right container
export const Slide3ContentRightStyled = styled.div`
  height: min-content;
  margin-left: auto;
  margin-right: 0;
  text-align: end;
`;

// * Style for the right text
export const Slide3TextRightStyled = styled.div<Slide3AnimationsType>`
  margin: 2vh 8vw 2vh 0vw;
  text-align: left;
  max-width: 85vw;
  opacity: ${(props) => props.opacity};
  font-weight: ${Tokens.Typography.Weights.Regular};
  font-size: ${Tokens.Typography.Sizes.Mobile.Small};
  line-height: ${Tokens.Typography.LineHeight.xxxSmall};
  transform: translateX(${(props) => props.translateX}vh);

  @media (min-width: 500px) {
    font-size: ${Tokens.Typography.Sizes.Mobile.Medium};
    line-height: ${Tokens.Typography.LineHeight.xxSmall};
  }

  @media (min-width: 700px) {
    font-size: ${Tokens.Typography.Sizes.Website.xSmall};
    line-height: ${Tokens.Typography.LineHeight.xSmall};
  }

  @media (min-width: 900px) {
    line-height: ${Tokens.Typography.LineHeight.Small};
  }

  @media (min-width: 1200px) {
    max-width: 35vw;
    line-height: ${Tokens.Typography.LineHeight.Regular};
    transform: translateY(${(props) => props.translateY}vh);
  }

  .Streesed {
    & ::after {
      content: "innovador sistema y una nueva experiencia de usuario nunca antes vista.";
      color: ${Tokens.Colors.Text.Primary};
      background: ${Tokens.Colors.Backgrounds.Primary};
      line-height: ${Tokens.Typography.LineHeight.xxSmall};

      @media (min-width: 500px) {
        line-height: ${Tokens.Typography.LineHeight.xSmall};
      }

      @media (min-width: 700px) {
        line-height: ${Tokens.Typography.LineHeight.Regular};
      }
    }
  }
`;
