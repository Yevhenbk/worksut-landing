import styled from "styled-components";


// * Interface definition for props configuration
interface LabelStyledProps {
    color: string;
    fontWeight: number;
    fontSize: string;
    fontFamily: string;
    backGround: string;
  }

  export const LabelStyled = styled.div<LabelStyledProps>`
  background-color: ${(props) => props.backGround};
  color: ${(props) => props.color};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  max-width: 25ch;
  font-family: ${(props) => props.fontFamily};
`;