import { Tokens } from "../../../static/Tokens";
import styled from "styled-components";

interface Slide2StyledProps {
  translateY: number;
  opacity: number;
}

// * Styled landing title
export const Slide2Styled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Tokens.Colors.Backgrounds.Primary};
`;

export const Slide2StyledText = styled.div<Slide2StyledProps>`
  transform: translateY(${(props) => props.translateY}vh);
  opacity: ${(props) => props.opacity};
  font-size: ${Tokens.Typography.Sizes.Mobile.xxLarge};
  font-family: ${Tokens.Typography.FontFamily.Primary};

  @media (min-width: 500px) {
    font-size: ${Tokens.Typography.Sizes.Website.Medium};
  }
  @media (min-width: 700px) {
    font-size: ${Tokens.Typography.Sizes.Website.Large};
  }
  @media (min-width: 1400px) {
    font-size: ${Tokens.Typography.Sizes.Website.xLarge};
  }
`;
