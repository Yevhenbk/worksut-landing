import styled, { keyframes } from 'styled-components';
import { Tokens } from '../../../static/Tokens';

// * Interface definition for props configuration
interface SlideStyled4Props {
    bgColor: string;
    width: number;
    height: number;
}

// * Styled container for the 4th view
export const SlideStyled4 = styled.div<SlideStyled4Props>`
    width: ${(props) => props.width}%;
    height: ${(props) => props.height}vh;
    background-color: ${(props) => props.bgColor};
`;

// * Define keyframes
const TextZoomAnimation = keyframes`
  0% {transform: scale(8);}
  100% {transform: scale(1);}    
`;

// * Styled container for main text
export const HeroContainer = styled.div`
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    text-align: center;
    margin-top: 40vh;
    max-width: 70vw;
    animation: ${TextZoomAnimation} 1.5s linear;
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
