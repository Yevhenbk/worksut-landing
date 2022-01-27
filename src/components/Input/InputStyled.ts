import styled from "styled-components";
import { Tokens } from "../../static/Colors";

// * Styled input
export const InputStyled = styled.input`
  border: none;
  background-color: transparent;
  color: ${Tokens.Colors.Primary};
  padding: 1%;
  width: 100%;
  ::placeholder {
    color: ${Tokens.Colors.Secondary};
    font-family: "Gilroy";
  }
  font-weight: normal;
  font-size: 32px;
  line-height: 49px;
  font-family: "Gilroy";
`;

// * Styled div
export const DivStyled = styled.div`
  border: none;
  border-bottom: 1px solid ${Tokens.Colors.Primary};
  padding: 1%;
  display: flex;
  flex-direction: row;
`;
