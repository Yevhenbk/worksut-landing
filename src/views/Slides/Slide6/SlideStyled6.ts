import { Tokens } from "../../../static/Tokens";
import styled from "styled-components";

// * Styled landing title
export const SlideStyled6 = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
  flex-direction: column;
  background-color: ${Tokens.Colors.Backgrounds.Secondary};
`;
export const DivStyle6 = styled.div`
  top: 16em;
  left: 1em;
  right: 0.5em;
  position: absolute;
  text-transform: uppercase;
  font-weight: ${Tokens.Typography.Weights.Bolder};

  @media (min-width: 500px) {
    top: 18em;
    left: 1.5em;
    right:1.5em;
  }
  @media (min-width: 700px) {
    top: 30em;
    left: 2.5em;
    max-width: 600px;
  }
  @media (min-width: 900px) {
    top: 30em;
    left: 8em;
    text-transform: none;
    max-width: 700px;

  }
  @media (min-width: 1200px) {
    top: 20em;
    right: 20em;
  }
  @media (min-width: 1400px) {
    top: 20em;
    max-width: 700px;
  }
`;
export const Icon = styled.img`
	width: 1em;
	height: 1em;
  left: 1em;
  right: 1em;
  margin-right: 0.5em;

  @media (min-width: 500px) {
    width: 1.8em;
    height: 1.8em;
  }
`;
export const TextIcon = styled.div`
  display: inline-flex;
  flex-wrap: nowrap;
  margin-top: 1em;
  text-transform: none;
  font-size: ${Tokens.Typography.Sizes.Mobile.xSmall};

  @media (min-width: 500px) {
    font-size: ${Tokens.Typography.Sizes.Mobile.Medium};
  }
  @media (min-width: 700px) {
    font-size: ${Tokens.Typography.Sizes.Website.xSmall};
  }
  @media (min-width: 900px) {
    font-size: ${Tokens.Typography.Sizes.Website.xSmall};
    text-transform: none;
  }
  @media (min-width: 1200px) {
    font-size: ${Tokens.Typography.Sizes.Website.xSmall};
  }
  @media (min-width: 1400px) {
    font-size: ${Tokens.Typography.Sizes.Website.xSmall};
  }
`;
