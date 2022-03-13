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
  position: relative;
  margin-left: auto;
  width: 200px;
  height: 200px;
  color: ${(props) => props.color};
`;

export const LanguageIconHeaderStyled = styled.p`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;

  @media (min-width: 500px) {
    font-size: 18px;
  }
  @media (min-width: 700px) {
    font-size: 24px;
    top: 0.5rem;
  }
`;

const openSelect = keyframes`
  0%{
    top: 0.5em;
	right: -0.5em;
    opacity: 0;
    transform: scale(0.2);
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
  animation: ${openSelect} 0.1s linear 1;

  @media (min-width: 500px) {
    font-size: 18px;
  }
  @media (min-width: 700px) {
    font-size: 24px;
  }
`;
