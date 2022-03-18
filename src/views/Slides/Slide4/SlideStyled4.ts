import styled from "styled-components";
import { Tokens } from "../../../static/Tokens";

// * Styled container for the 4th view
export const SlideStyled4 = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  height: 100vh;
  background-color: ${Tokens.Colors.Backgrounds.Primary};
  font-family: ${Tokens.Typography.FontFamily.Primary};
  font-weight: ${Tokens.Typography.Weights.Bolder};
  color: ${Tokens.Colors.Text.Primary};
  overflow: hidden;
`;

interface Slide4StyleProptypes {
  scale: number;
}

// * Styled container for main text
export const HeroContainer = styled.div<Slide4StyleProptypes>`
  margin: 0px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  text-align: center;
  max-width: 75vw;
  transform: scale(${(props) => props.scale});
  font-size: ${Tokens.Typography.Sizes.Mobile.xLarge};

  @media (min-width: 500px) {
    font-size: ${Tokens.Typography.Sizes.Mobile.xxLarge};
  }
  @media (min-width: 700px) {
    font-size: ${Tokens.Typography.Sizes.Website.Medium};
  }
  @media (min-width: 900px) {
    font-size: 80px;
  }
  @media (min-width: 1200px) {
    font-size: ${Tokens.Typography.Sizes.Website.Large};
  }
`;

// * Styled Span Container for "New" word
export const SpanNewContainer = styled.span`
  position: relative;
  margin: 0 1vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// * Interface definition for svg props

// * Styled SVG for crossline
export const SvgStyled = styled.svg`
  width: 100%;
  position: absolute;
  top: 1.5vw;
  left: 1vw;
  @media (min-width: 2000px) {
    top: 1vw;
  }
`;

// * Interface definition for crossline props
interface CrossLineStyledProps {
  strokeColor: string;
}

// * Styled line for crossline
export const CrossLineStyled = styled.line<CrossLineStyledProps>`
  background-color: green;
  stroke: ${(props) => props.strokeColor};
  stroke-width: 10;
  transform: scale(0.4);

  @media (min-width: 500px) {
    transform: scale(0.63);
  }
  @media (min-width: 700px) {
    transform: scale(1);
  }
  @media (min-width: 900px) {
    transform: scale(1.1);
  }
  @media (min-width: 1200px) {
    transform: scale(1.3);
  }
`;
