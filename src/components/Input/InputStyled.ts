import styled from 'styled-components'
import { Tokens } from '../../static/Tokens'

// * Styled input
export const InputStyled = styled.input`
	border: none;
	background-color: transparent;
	color: ${Tokens.Colors.Text.Primary};
	padding: 1%;
	width: 100%;
	::placeholder {
		color: ${Tokens.Colors.Text.Secondary};
		font-family: ${Tokens.Typography.FontFamily.Primary};
	}
	font-weight: ${Tokens.Typography.Weights.Regular};
	font-size: ${Tokens.Typography.Sizes.Website.Small};
	line-height: ${Tokens.Typography.LineHeight.xLarge};
	font-family: ${Tokens.Typography.FontFamily.Primary};
`

// * Styled div
export const DivStyled = styled.div`
	border: none;
	border-bottom: 1px solid ${Tokens.Colors.Backgrounds.Primary};
	padding: 1%;
	display: flex;
	flex-direction: row;
`
