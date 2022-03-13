import { Tokens } from "./../../static/Tokens";
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
  font-size: ${Tokens.Typography.Sizes.Mobile.Small};
  font-family: ${(props) => props.fontFamily};

  @media (min-width: 500px) {
    font-size: ${Tokens.Typography.Sizes.Website.xSmall};
  }

  @media (min-width: 700px) {
    font-size: ${Tokens.Typography.Sizes.Website.Small};
  }

  @media (min-width: 900px) {
    font-size: ${Tokens.Typography.Sizes.Website.Regular};
  }
  @media (min-width: 1200px) {
    font-size: ${Tokens.Typography.Sizes.Website.Regular};
  }
`;
