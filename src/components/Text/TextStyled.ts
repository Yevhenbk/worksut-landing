import styled from "styled-components";

// * Interface definition for props configuration
interface TextStyledProps {
  color: string;
  bgColor: string;
  fontFamily: string;
  fontSize: string;
  fontWeight: number;
  lineHeight: string;
  width: number;
}

// * Styled landing title
export const TextStyled = styled.div<TextStyledProps>`
  max-width: ${(props) => props.width}ch;
  color: ${(props) => props.color};
  background-color: ${(props) => props.bgColor};
  font-family: ${(props) => props.fontFamily};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
`;
