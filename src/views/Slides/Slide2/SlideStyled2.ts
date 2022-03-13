import { Tokens } from "../../../static/Tokens";
import styled, { keyframes } from "styled-components";
// * Define keyframes
const NameAnimation = keyframes`
0%{
  transform: translateY(60%);
  opacity: 0;	 
}
20%{
  opacity: 0;	 
}
50%{
  transform: translateY(0%);
  opacity: 1;	 
}

100%{
  transform: translateY(0%);
  opacity: 1;	 
}

`;
// * Styled landing title
export const Slide2Styled = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${Tokens.Colors.Backgrounds.Primary};
`;

export const Slide2StyledText = styled.div`
  animation: ${NameAnimation} 1.5s ease-out forwards;
  transform: translateY(50vh);
  font-size: ${Tokens.Typography.Sizes.Website.Regular};

  @media (min-width: 500px) {
    font-size: ${Tokens.Typography.Sizes.Website.Medium};
  }
  @media (min-width: 700px) {
    font-size: ${Tokens.Typography.Sizes.Website.Large};
  }
  @media (min-width: 900px) {
    font-size: ${Tokens.Typography.Sizes.Website.Large};
  }
  @media (min-width: 1200px) {
    font-size: ${Tokens.Typography.Sizes.Website.Large};
  }
  @media (min-width: 1500px) {
    font-size: ${Tokens.Typography.Sizes.Website.xLarge};
  }
  @media (min-width: 1800px) {
    font-size: ${Tokens.Typography.Sizes.Website.xLarge};
  }
`;
