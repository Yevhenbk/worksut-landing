import styled from "styled-components";
import { Tokens } from "../../../static/Tokens";

// * Styled container for the 4th view
export const SlideStyled4 = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${Tokens.Colors.Backgrounds.Primary};
`;

// scale 8 => 1
interface Slide4StyleProptypes {
  scale: number;
}

// * Styled container for main text
export const HeroContainer = styled.div<Slide4StyleProptypes>`
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  text-align: center;
  margin-top: 40vh;
  max-width: 70vw;
  transform: scale(${props => props.scale})
  font-size: 26px;

  @media (min-width: 500px) {
    font-size: ${Tokens.Typography.Sizes.Website.Regular};
  }

  @media (min-width: 700px) {
    font-size: ${Tokens.Typography.Sizes.Website.Medium};
  }
`;

// * Styled Span Container for "New" word
export const SpanNewContainer = styled.span`
  position: relative;
  margin-left: 15px;
  margin-right: 15px;
`;

// * Interface definition for svg props
interface SvgStyledProps {
  width: number;
}

// * Styled SVG for crossline
export const SvgStyled = styled.svg<SvgStyledProps>`
  width: ${(props) => props.width}%;
  position: absolute;
  top: -4px;
  left: -4px;
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
`;
