import styled from 'styled-components'
import { Tokens } from '../../static/Tokens'

// * Styled input
export const InputStyled = styled.input`
  border: none;
  background-color: transparent;
  color: ${Tokens.Colors.Button.Default};
  padding: 1%;
  width: 100%;
  outline: none !important;
  font-family: ${Tokens.Typography.FontFamily.Primary};
  ::placeholder {
    color: ${Tokens.Colors.Button.Dissbled};
  }
  font-weight: ${Tokens.Typography.Weights.Regular};
  font-size: ${Tokens.Typography.Sizes.Mobile.Medium};

  @media (min-width: 500px) {
    font-size: ${Tokens.Typography.Sizes.Website.xSmall};
  }

  @media (min-width: 700px) {
    font-size: ${Tokens.Typography.Sizes.Website.xSmall};
  }
`;

// * Styled div
export const DivStyled = styled.div`
  border: none;
  border-bottom: 1px solid ${Tokens.Colors.Text.Secondary};
  margin-top: 1em;
  display: flex;
  flex-direction: row;
`;
