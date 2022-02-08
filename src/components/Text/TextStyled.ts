import styled from 'styled-components'

// * Interface definition for props configuration
interface TextStyledProps {
	color: string
	fontFamily: string
	fontSize: string
	fontWeight: number
	width: number
}

// * Styled landing title
export const TextStyled = styled.div<TextStyledProps>`
	max-width: ${(props) => props.width}ch;
	color: ${(props) => props.color};
	font-family: ${(props) => props.fontFamily};
	font-size: ${(props) => props.fontSize};
	font-weight: ${(props) => props.fontWeight};
`
