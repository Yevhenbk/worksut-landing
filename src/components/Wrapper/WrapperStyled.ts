import styled from 'styled-components'

// * Style the button
export const ButtonStyled = styled.button`
	border: none;
	background-color: transparent;
	cursor: pointer;

	.IconWrapper{
		width: 30px;
		@media (min-width: 500px) {
			width: 50px;
		  }
	}
`
