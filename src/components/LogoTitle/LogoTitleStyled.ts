import styled from "styled-components";
import { Tokens } from "../../static/Tokens";

// * Interface definition for logo
interface LogoTitleStyledProps {
  color: string;
  fontWeight: number;
  fontSize: string;
  fontFamily: string;
  backGround: string;
}

// * Style for logo
export const LogoTitleStyled = styled.h3<LogoTitleStyledProps>`
  color: ${(props) => props.color};
  font-size: ${Tokens.Typography.Sizes.Mobile.Medium};
  font-family: ${(props) => props.fontFamily};
  font-weight: ${(props) => props.fontWeight};
  background-color: ${(props) => props.backGround};
  position: relative;
  margin-top: 0;
  margin-left: 1em;

  @media (min-width: 500px) {
    font-size: ${Tokens.Typography.Sizes.Website.xSmall};
  }

  @media (min-width: 700px) {
    font-size: ${Tokens.Typography.Sizes.Website.Small};
  }
`;