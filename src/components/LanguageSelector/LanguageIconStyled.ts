import { Tokens } from "./../../static/Tokens";
import styled, { keyframes } from "styled-components";

// *
interface LanguageSelectorProps {
    color: string;
}

interface LanguageIconStyledProps {
    left: string;
    top: string;
}

export const LanguageSelectorContainerStyled = styled.div<LanguageSelectorProps>`
    position: absolute;
    z-index: 999;
    top: 2em;
    right: 1.5em;
    width: 125px;
    height: 125px;
    color: ${(props) => props.color};
    font-family: ${Tokens.Typography.FontFamily.Primary};

    @media (min-width: 500px) {
        width: 150px;
        height: 150px;
    }
    @media (min-width: 700px) {
        right: 2em;
        width: 200px;
        height: 200px;
    }
`;

export const LanguageIconHeaderStyled = styled.p`
    position: absolute;
    top: 0em;
    right: 0em;
    margin: 0;
    font-size: 12px;
    font-weight: 700;
    cursor: pointer;

    @media (min-width: 500px) {
        font-size: 18px;
    }
    @media (min-width: 700px) {
        font-size: 24px;
    }
`;

const openSelect = keyframes`
  0%{
    top: 0.5em;
	  right: -0.5em;
    opacity: 0;
    transform: scale(0.2);
  }

  25%{
    opacity: 0.2;
    transform: scale(0.3);
  }
  50%{
    opacity: 0.5;
    transform: scale(0.5);
  }
	
   100%{
    opacity: 1;
   }
 `;

export const LanguageSelectorStyled = styled.ul`
    margin: 0px;
    padding: 0px;
    position: static;
    width: 100px;
    height: 100px;
    list-style: none;
`;

export const LanguageIconStyled = styled.li<LanguageIconStyledProps>`
    font-size: 12px;
    font-weight: 700;
    margin: 0px;
    cursor: pointer;
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    animation: ${openSelect} 0.2s linear 1;

    @media (min-width: 500px) {
        font-size: 18px;
    }
    @media (min-width: 700px) {
        font-size: 24px;
    }
`;
