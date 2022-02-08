import styled from 'styled-components'

// * Interface definition for props configuration
interface Slide2StyledProps {
	bgColor: string
	width: number
	height: number
}

// * Styled landing title
export const Slide2Styled = styled.div<Slide2StyledProps>`
	width: ${(props) => props.width}%;
	height: ${(props) => props.height}vh;

	display: flex;
	justify-content: center;
	align-items: center;

	background-color: ${(props) => props.bgColor};
`
