import styled from 'styled-components'
import { Tokens } from '../../static/Tokens'

// * Styled div
export const DivStyled = styled.div`
  border: none;
  border-bottom: 1px solid ${Tokens.Colors.Text.Secondary};
  margin-top: 1em;
  max-width: 80vw;
  display: flex;
  justify-content:space-between;
  @media (min-width: 500px) {
    max-width: 70vw;
  }
  @media (min-width: 900px) {
    max-width: 60vw;
  }
  @media (min-width: 1200px) {
    max-width: 43vw;
  }
  @media (min-width: 1700px) {
    max-width: 40vw;
  }
`;

// * Styled input
export const InputStyled = styled.input`
  border: none;
  background-color: transparent;
  color: ${Tokens.Colors.Button.Default};
  width: 80%;
  outline: none !important;
  font-family: ${Tokens.Typography.FontFamily.Primary};
  ::placeholder {
    color: ${Tokens.Colors.Button.Dissbled};
  }
  font-weight: ${Tokens.Typography.Weights.Regular};
  font-size: ${Tokens.Typography.Sizes.Mobile.Small};

  @media (min-width: 500px) {
    font-size: ${Tokens.Typography.Sizes.Mobile.Medium};
  }
  @media (min-width: 700px) {
    font-size: ${Tokens.Typography.Sizes.Website.xSmall};
  }
  @media (min-width: 1400px) {
    font-size: ${Tokens.Typography.Sizes.Website.Small};
  }
  @media (min-width: 1800px) {
    font-size: ${Tokens.Typography.Sizes.Website.Regular};
  }
`;


