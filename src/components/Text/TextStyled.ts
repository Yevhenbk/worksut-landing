import styled from "styled-components";

// * Interface definition for props configuration
interface TextStyledProps {
  color: string;
  fontWeight: number;
  fontSize: string;
}

// * Styled landing title
export const TextStyled = styled.div<TextStyledProps>`
  background-color: #313131;
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  max-width: 25ch;
  font-family: "Gilroy";
`;
